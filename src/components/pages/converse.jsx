import { AudioRecorder } from "react-audio-voice-recorder";

import { Heading } from "../common";
import { PageLayout } from "../templates";

export const Converse = () => {
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  return (
    <PageLayout hasBack>
      <Heading title="Converse" />
      <AudioRecorder
        onRecordingComplete={addAudioElement}
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
