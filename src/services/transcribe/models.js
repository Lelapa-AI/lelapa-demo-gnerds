export const transcriptionModel = ({ data }) => ({
	transcription: data?.text,
	languageId: data?.language_id,
});
