import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "thirdweb Embedded Wallet",
		icon: "wallets",
	});
}
