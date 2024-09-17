import axios from "axios";

import { config } from "../../config";

const { apiKey, qfrencyApiKey, lelapaId } = config;

export const vulaAuthRequest = axios.create({
	headers: {
		"X-CLIENT-TOKEN": apiKey,
		"X-CLIENT-ID": lelapaId,
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
	},
});

export const csirAuthRequest = axios.create({
	headers: {
		"X-Api-Key": qfrencyApiKey,
		"Content-Type": "application/json",
	},
});
