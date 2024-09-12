import { config } from "../../../config";
import { csirAuthRequest } from "../auth";
import { synthesisDto } from "./dto";

const { qfrencyUrl } = config;

const SYNTHESIZE_URL = `${qfrencyUrl}/synthesize`;
const VOICES_URL = `${qfrencyUrl}/voices`;

const synthesize = (text, lang) => {
	const dto = synthesisDto(text, lang);
	return csirAuthRequest.post(SYNTHESIZE_URL, JSON.stringify(dto));
};

const getVoices = () => {
	return csirAuthRequest.get(`${VOICES_URL}`);
};

export default {
	synthesize,
	getVoices,
};
