import axios from "axios";

import config from "../../config";

const { apiKey } = config;

export const authRequest = axios.create({
  headers: {
    "X-CLIENT-TOKEN": apiKey,
  },
});
