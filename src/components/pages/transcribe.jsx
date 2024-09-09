import { AudioRecorder } from "react-audio-voice-recorder";
import { PageLayout } from "../templates";

export const Transcribe = () => {
  return (
    <PageLayout hasBack title="Transcribe">
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
