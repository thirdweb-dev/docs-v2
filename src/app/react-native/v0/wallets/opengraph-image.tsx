import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Supported Wallets in thirdweb React Native SDK",
		icon: "react",
	});
}
