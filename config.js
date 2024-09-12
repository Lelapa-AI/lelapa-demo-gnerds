const {
	VITE_LELAPA_HOST_URL,
	VITE_API_VERSION,
	VITE_LELAPA_API_KEY,
	VITE_WHATSAPP_LINK,
	VITE_LELAPA_ID,
	VITE_QFRENCY_URL,
	VITE_QFRENCY_API_KEY,
	VITE_QFRENCY_ACCOUNT_KEY,
} = import.meta.env;

export const config = {
	baseUrl: VITE_LELAPA_HOST_URL,
	apiVersion: VITE_API_VERSION,
	apiKey: VITE_LELAPA_API_KEY,
	hostUrl: `${VITE_LELAPA_HOST_URL}/${VITE_API_VERSION}`,
	whatsAppURL: VITE_WHATSAPP_LINK,
	lelapaId: VITE_LELAPA_ID,
	qfrencyUrl: `${VITE_QFRENCY_URL}/v1`,
	qfrencyApiKey: VITE_QFRENCY_API_KEY,
	qfrencyAccountKey: VITE_QFRENCY_ACCOUNT_KEY,
};
