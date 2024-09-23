import { useState } from "react";

export const useTranscribe = () => {
	const [base64String, setBase64String] = useState("");
	const [fileName, setFileName] = useState("");
	const [fileSize, setFileSize] = useState(0);

	return {
		base64String,
		setBase64String,
		fileName,
		setFileName,
		fileSize,
		setFileSize,
	};
};
