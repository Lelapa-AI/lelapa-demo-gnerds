import axios from "axios";

import { config } from "../../config";

const { apiKey, qfrencyAccountKey, qfrencyApiKey, lelapaId } = config;

export const vulaAuthRequest = axios.create({
	headers: {
		"X-CLIENT-TOKEN": apiKey,
		"X-CLIENT-ID": lelapaId,
		"Content-Type": "application/json",
	},
});

export const csirAuthRequest = axios.create({
	headers: {
		"X-API-KEY": qfrencyApiKey,
		" X-ACCOUNT-KEY": qfrencyAccountKey,
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "http://localhost:5173",
	},
});
