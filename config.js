import {
  VITE_LELAPA_HOST_URL,
  VITE_API_VERSION,
  VITE_LELAPA_API_KEY,
} from "vite:env";

export const config = {
  baseUrl: VITE_LELAPA_HOST_URL,
  apiVersion: VITE_API_VERSION,
  apiKey: VITE_LELAPA_API_KEY,
  hostUrl: `${VITE_LELAPA_HOST_URL}/${VITE_API_VERSION}`,
};
