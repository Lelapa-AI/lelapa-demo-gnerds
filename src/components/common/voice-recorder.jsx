import { useEffect, useRef, useState } from "react";
import { FaStopCircle } from "react-icons/fa";
import { IoMicCircle } from "react-icons/io5";
import propTypes from "prop-types";

import { TranscribeService } from "../../services";

export const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [base64String, setBase64String] = useState(null);
  const [amplitude, setAmplitude] = useState(10);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const [uploadId] = useState(null);

  const url = (id) =>
    `https://vulavula-services.lelapa.ai/transcribe/${id}/get`;

  const handleStartRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };
    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioUrl);

      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = () => {
        const _base64String = reader.result;
        setBase64String(_base64String.split(",")[1]); // Remove the data URL prefix
      };
    };
    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  useEffect(() => {
    let amplitudeInterval;
    if (isRecording) {
      amplitudeInterval = setInterval(() => {
        setAmplitude(Math.random() * 30 + 10);
      }, 100);
    } else {
      setAmplitude(10);
    }
    return () => clearInterval(amplitudeInterval);
  }, [isRecording]);

  useEffect(() => {
    if (uploadId) {
      console.log("Have upload id, now");
      const interval = setInterval(() => {
        fetch(url(uploadId), {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-CLIENT-TOKEN": import.meta.env.VITE_LELAPA_API_KEY,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            clearInterval(interval);
          });
      }, 5000);
    }
  }, [uploadId]);

  return (
    <div className="flex justify-center flex-col gap-4 items-center">
      <button
        onClick={isRecording ? handleStopRecording : handleStartRecording}
      >
        {isRecording ? (
          <FaStopCircle
            className={`${
              isRecording ? "text-red-500" : "text-red-300"
            } text-5xl`}
          />
        ) : (
          <IoMicCircle className="text-red-300 text-5xl" />
        )}
      </button>
    </div>
  );
};

VoiceRecorder.propTypes = {};
