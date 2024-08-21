import { config } from "../../../config";
import { authRequest } from "../auth";
import { uploadDto } from "./dto";

const { hostUrl } = config;

const UPLOAD_URL = `${hostUrl}/transport/file-upload`;
const PROCESS_URL = (id) => `${hostUrl}/transcribe/process/${id}`;

const upload = (file, encodedString, fileSize) => {
  return authRequest.post(UPLOAD_URL, uploadDto(file, encodedString, fileSize));
};

const process = () => {
  return authRequest.post(PROCESS_URL, {
    webhook: "WEBHOOK_URL",
    language_code: "zul",
  });
};
export default {
  upload,
  process,
};
