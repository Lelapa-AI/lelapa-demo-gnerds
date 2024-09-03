import { useState } from "react";
import { AudioRecorder } from "react-audio-voice-recorder";
import { PageLayout } from "../templates";
import { Heading } from "../common";

export const Transcribe = () => {
  const [recording, setRecording] = useState(null);

  const showRecording = (audio) => {
    if (!recording) return;
    console.log(audio);
    setRecording(audio);
  };

  return (
    <PageLayout hasBack>
      <Heading title="Transcribe" />
      <AudioRecorder
        onRecordingComplete={showRecording}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        showVisualizer
        downloadOnSavePress={true}
        downloadFileExtension="webm"
      />
    </PageLayout>
  );
};
