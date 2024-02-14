import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "How thirdweb Auth works",
		icon: "wallets",
	});
}
