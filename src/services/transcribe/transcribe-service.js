import { config } from "../../../config";
import { vulaAuthRequest } from "../auth";
import { uploadDto } from "./dto";

const { hostUrl } = config;

const UPLOAD_URL = `${hostUrl}/transport/file-upload`;
const PROCESS_URL = (id) => `${hostUrl}/transcribe/process/${id}`;
const TRANSCRIBE_SYNC_URL = `${hostUrl}/transcribe/sync`;

const upload = (file, encodedString, fileSize) => {
	return vulaAuthRequest.post(
		UPLOAD_URL,
		uploadDto(file, encodedString, fileSize),
	);
};

const process = (webHookUrl, langToCode) => {
	return vulaAuthRequest.post(PROCESS_URL, {
		webhook: webHookUrl,
		language_code: langToCode,
	});
};

const transcribeAsync = (file, encodedString, fileSize) => {
	const dto = uploadDto({ file, encodedString, fileSize });
	return vulaAuthRequest.post(TRANSCRIBE_SYNC_URL, dto);
};

export default {
	upload,
	process,
	transcribeAsync,
};
