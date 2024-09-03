import { AudioRecorder } from "react-audio-voice-recorder";
import { PageLayout } from "../templates";
import { Heading } from "../common";

export const Transcribe = () => {
  return (
    <PageLayout hasBack>
      <Heading title="Transcribe" />
      <AudioRecorder
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
