import { useEffect, useRef, useState } from "react";
import Tesseract from "tesseract.js";
import { FaCamera } from "react-icons/fa6";
import { TbCaptureFilled } from "react-icons/tb";
import { FiCameraOff } from "react-icons/fi";
import { useNavigate } from "@tanstack/react-router";

export const CameraCapture = () => {
  const [fromLang, setFromLang] = useState("English");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [extractedText, setExtractedText] = useState(null);
  const [language, setLanguage] = useState(null);
  const navigate = useNavigate();

  const detectLanguage = () => {
    setLanguage("English");
  };

  useEffect(() => {
    setTimeout(() => {
      if (extractedText) detectLanguage();
    }, 2045);
  }, [extractedText]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsCameraOn(true);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.drawImage(
          videoRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        const imageData = canvasRef.current.toDataURL("image/png");
        extractTextFromImage(imageData);
      }
    }
  };

  const extractTextFromImage = (imageData) => {
    Tesseract.recognize(imageData, "eng", {
      logger: (m) => console.log(m),
    })
      .then(({ data: { text } }) => {
        setExtractedText(text);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      for (const track of tracks) {
        track.stop();
      }
      videoRef.current.srcObject = null;
      setIsCameraOn(false);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-center py-3">
        {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
        <video
          ref={videoRef}
          width="80%%"
          height="200"
          style={{
            display: isCameraOn ? "block" : "none",
            transform: isCameraOn ? "scaleX(-1)" : "none",
          }}
        />

        <canvas
          ref={canvasRef}
          width="80%"
          height="200"
          style={{ display: "none" }}
        />
      </div>
      <div className="flex justify-center items-center border-2 rounded-lg mx-4">
        <button
          className="flex gap-2 items-center font-semibold text-xs"
          onClick={startCamera}
          disabled={isCameraOn}
          type="button"
        >
          <FaCamera className="text-lightPurple text-lg" /> Open
        </button>
        <span className="px-2">{" | "}</span>
        <button
          className="flex gap-2 items-center font-semibold text-xs"
          onClick={captureImage}
          disabled={!isCameraOn}
          type="button"
        >
          <TbCaptureFilled className="bg-lightPurple" />
          Capture
        </button>
        <span className="px-2">{" | "}</span>
        <button
          className="flex gap-2 items-center font-semibold text-xs"
          onClick={stopCamera}
          disabled={!isCameraOn}
          type="button"
        >
          <FiCameraOff className="bg-lightPurple" /> Camera
        </button>
      </div>
      {extractedText && (
        <>
          <div className="flex justify-center gap-3 items-center">
            <h2 className="font-semibold">Detected Text:</h2>
            <p className="border rounded-lg my-2 px-3 py-2">{extractedText}</p>
          </div>

          {language && (
            <div className="flex justify-center gap-3 items-center">
              <h2 className="font-semibold">Detected Language:</h2>
              <p className="border rounded-lg my-2 px-3 py-2">
                {language ? language : "Detecting..."}
              </p>
            </div>
          )}

          <section className="flex flex-col justify-center items-center">
            <h3 className="font-semibold">
              Set {language} as your source language?
            </h3>
            <section className="flex gap-3 items-center">
              <button
                onClick={() => {
                  setFromLang(language ?? "");
                  navigate("/translate");
                }}
                className="bg-lightPurple text-white rounded-lg px-5 py-2"
                type="button"
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setIsCameraOn(false);
                  navigate("/config");
                }}
                type="button"
                className="bg-lightPurple text-white rounded-lg px-5 py-2"
              >
                No
              </button>
            </section>
          </section>
        </>
      )}
    </div>
  );
};
