import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "thirdweb NFT Checkout",
		icon: "payment",
	});
}
