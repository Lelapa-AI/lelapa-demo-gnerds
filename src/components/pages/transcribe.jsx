import { AudioRecorder } from "react-audio-voice-recorder";
import { PageLayout } from "../templates";

export const Transcribe = () => {
	return (
		<PageLayout hasBack title="Transcribe">
			<section className="flex items-center justify-center h-screen">
				<AudioRecorder
					className="mx-auto"
					audioTrackConstraints={{
						noiseSuppression: true,
						echoCancellation: true,
					}}
					showVisualizer
					downloadOnSavePress={true}
					downloadFileExtension="webm"
				/>
			</section>
		</PageLayout>
	);
};
