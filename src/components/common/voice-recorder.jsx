import { AudioRecorder } from "react-audio-voice-recorder";
import PropTypes from "prop-types";

import { useAudioConverter } from "../../hooks";

export const VoiceRecorder = ({
	setBase64String,
	setFileName,
	setFileSize,
}) => {
	const { convertToWav } = useAudioConverter();

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
						const file = new File([_base64String], "audio.wav", {
							type: "audio/wav",
						});
						setFileName(file.name);
						setFileSize(file.size);
					};
				}}
				downloadFileExtension="wav"
			/>
		</div>
	);
};

VoiceRecorder.propTypes = {
	setBase64String: PropTypes.func.isRequired,
	setFileName: PropTypes.func.isRequired,
	setFileSize: PropTypes.func.isRequired,
};
