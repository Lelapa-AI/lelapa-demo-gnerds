export const transcriptionModel = ({ data }) => {
	console.log("Model", data);
	return {
		transcription: data?.text,
		languageId: data?.language_id,
	};
};
