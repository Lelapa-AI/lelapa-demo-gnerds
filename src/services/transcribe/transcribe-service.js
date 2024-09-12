import { config } from "../../../config";
import { vulaAuthRequest } from "../auth";
import { uploadDto } from "./dto";

const { hostUrl } = config;

const UPLOAD_URL = `${hostUrl}/transport/file-upload`;
const PROCESS_URL = (id) => `${hostUrl}/transcribe/process/${id}`;

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

export default {
	upload,
	process,
};
