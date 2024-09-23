import { useCallback } from "react";

function bufferToWav(buffer) {
	const numberOfChannels = buffer.numberOfChannels;
	const sampleRate = buffer.sampleRate;
	const length = buffer.length * numberOfChannels * 2;
	const arrayBuffer = new ArrayBuffer(44 + length);
	const view = new DataView(arrayBuffer);

	// Write WAV header
	writeString(view, 0, "RIFF");
	view.setUint32(4, 36 + length, true);
	writeString(view, 8, "WAVE");
	writeString(view, 12, "fmt ");
	view.setUint32(16, 16, true);
	view.setUint16(20, 1, true);
	view.setUint16(22, numberOfChannels, true);
	view.setUint32(24, sampleRate, true);
	view.setUint32(28, sampleRate * numberOfChannels * 2, true);
	view.setUint16(32, numberOfChannels * 2, true);
	view.setUint16(34, 16, true);
	writeString(view, 36, "data");
	view.setUint32(40, length, true);

	// Write audio data
	const offset = 44;
	for (let i = 0; i < buffer.length; i++) {
		for (let channel = 0; channel < numberOfChannels; channel++) {
			const sample = Math.max(
				-1,
				Math.min(1, buffer.getChannelData(channel)[i]),
			);
			view.setInt16(
				offset + (i * numberOfChannels + channel) * 2,
				sample < 0 ? sample * 0x8000 : sample * 0x7fff,
				true,
			);
		}
	}

	return arrayBuffer;
}

function writeString(view, offset, string) {
	for (let i = 0; i < string.length; i++) {
		view.setUint8(offset + i, string.charCodeAt(i));
	}
}

export const useAudioConverter = () => {
	const convertToWav = useCallback(async (blob) => {
		if (!(blob instanceof Blob)) {
			throw new Error("Input must be a Blob");
		}

		// Create an audio context
		const audioContext = new (
			window.AudioContext || window.webkitAudioContext
		)();

		try {
			// Read the file
			const arrayBuffer = await blob.arrayBuffer();

			// Decode the audio
			const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

			// Create a buffer source
			const source = audioContext.createBufferSource();
			source.buffer = audioBuffer;

			// Create an offline context
			const offlineContext = new OfflineAudioContext(
				audioBuffer.numberOfChannels,
				audioBuffer.length,
				audioBuffer.sampleRate,
			);

			// Connect the source to the offline context
			const offlineSource = offlineContext.createBufferSource();
			offlineSource.buffer = audioBuffer;
			offlineSource.connect(offlineContext.destination);

			// Render the audio
			offlineSource.start(0);
			const renderedBuffer = await offlineContext.startRendering();

			// Convert to WAV
			const wavBuffer = bufferToWav(renderedBuffer);

			// Create a new Blob with the WAV data
			return new Blob([wavBuffer], { type: "audio/wav" });
		} finally {
			// Always close the audio context
			await audioContext.close();
		}
	}, []);

	return { convertToWav };
};
