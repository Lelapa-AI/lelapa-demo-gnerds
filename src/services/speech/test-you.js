import axios from "axios";
import { config } from "../../../config";

const URL = config.qfrencyUrl;
const VERSION = "v1";
const X_API_KEY = config.qfrencyApiKey;
/* const X_ACCOUNT_ID = config.qfrencyAccountKey; */

class QfrencyCloudTTS {
	constructor(AccountID, API_Key) {
		/**
		 * Create a new Qfrency cloud TTS object which can be used to
		 * interact with the Qfrency TTS Cloud API.
		 *
		 * @param {string} AccountID - Your account identifier UUID string.
		 * @param {string} API_Key - Your API_Key for this session.
		 */
		this._AccountID = AccountID;
		this._API_Key = API_Key;
		this._url = `${URL}/${VERSION}`;
		this._voices_url = `${this._url}/voices`;
		this._synth_url = `${this._url}/synthesize`;
		this._voices = this._getVoices();
	}

	async _getVoices() {
		try {
			const headers = { [X_API_KEY]: this._API_Key };
			const response = await axios.get(this._voices_url, { headers });
			console.log(`Request URL: ${response.config.url}`);

			if (response.status === 200 && response.data.voices) {
				return response.data.voices;
			} else {
				return [];
			}
		} catch (error) {
			console.error("Error fetching voices:", error);
			return [];
		}
	}

	get voices() {
		/**
		 * Get a list of available voices for synthesis.
		 */
		return this._voices;
	}

	async synth(voiceCode, text, args = {}) {
		/**
		 * Synthesize the given text with the given voice name and
		 * return the wav bytestream.
		 *
		 * @param {string} voiceCode - The voice-code of the voice to be used for synthesis.
		 * @param {string} text - The text for to be synthesized.
		 * @param {object} args - Optional extra arguments for synthesis.
		 * @returns {Promise<Buffer>} - Decoded WAV bytestream.
		 */
		const params = { "voice-code": voiceCode, text, ...args };
		const headers = { [X_API_KEY]: this._API_Key };

		try {
			const response = await axios.post(this._synth_url, params, { headers });

			if (response.status === 200) {
				const wavBuffer = Buffer.from(response.data.wav_64, "base64");
				return wavBuffer;
			} else {
				const { code, message } = response.data.error;
				throw new Error(`(${code}) ${message}`);
			}
		} catch (error) {
			console.error("Error synthesizing text:", error);
			throw error;
		}
	}
}

export default QfrencyCloudTTS;
