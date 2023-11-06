import path from "path";
import getConfig from "next/config";

const fallbackConfig = {
	serverRuntimeConfig: {
		__ROOT_DIR__: "",
	},
};

export const get_NEXT_OUTPUT_FOLDER = () => {
	const { serverRuntimeConfig } = getConfig() || fallbackConfig;
	return path.join(serverRuntimeConfig.__ROOT_DIR__, ".next/server/app");
};

export const get_SERACH_CONTENT_JSON = () => {
	const { serverRuntimeConfig } = getConfig() || fallbackConfig;

	return path.join(
		serverRuntimeConfig.__ROOT_DIR__,
		".data/search-content.json",
	);
};
