import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "FAQs about thirdweb Auth",
		icon: "wallets",
	});
}
