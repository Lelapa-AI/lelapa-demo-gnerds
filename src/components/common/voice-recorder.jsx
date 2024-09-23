import { useState, useMemo } from "react";
import { AudioRecorder } from "react-audio-voice-recorder";
import { useQuery } from "@tanstack/react-query";

import { TranscribeService } from "../../services";
import { useAudioConverter } from "../../hooks";

export const VoiceRecorder = () => {
	const { convertToWav } = useAudioConverter();
	const [transcribing, setTranscribing] = useState(false);
	const [base64String, setBase64String] = useState(null);

	const file = useMemo(
		() => new File([base64String], "audio.wav", { type: "audio/wav" }),
		[base64String],
	);
	const { data } = useQuery({
		queryKey: ["transcribe"],
		queryFn: () =>
			TranscribeService.transcribeAsync(file?.name, base64String, file.size),
		enabled: transcribing && !!file?.name && !!base64String && !!file.size,
		onSuccess: () => {
			setTranscribing(false);
		},
	});

	console.log("My Output:", data);

	return (
		<div className="flex justify-center flex-col gap-4 items-center">
			<AudioRecorder
				className="mx-auto"
				audioTrackConstraints={{
					noiseSuppression: true,
					echoCancellation: true,
				}}
				showVisualizer
				onRecordingComplete={async (blob) => {
					const reader = new FileReader();
					const _blob = await convertToWav(blob);
					reader.readAsDataURL(_blob);
					reader.onloadend = () => {
						const _base64String = reader.result;
						setBase64String(_base64String.split(",")[1]);
					};
					setTranscribing(true);
				}}
				downloadFileExtension="wav"
			/>
		</div>
	);
};

VoiceRecorder.propTypes = {};
