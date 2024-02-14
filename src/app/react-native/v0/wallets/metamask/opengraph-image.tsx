import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "MetaMask Wallet",
		icon: "react",
	});
}
