import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Connecting Wallets in thirdweb React Native SDK",
		icon: "react",
	});
}
