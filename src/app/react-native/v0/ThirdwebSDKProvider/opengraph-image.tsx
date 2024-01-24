import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "ThirdwebSDKProvider: thirdweb React Native SDK",
		icon: "react",
	});
}
