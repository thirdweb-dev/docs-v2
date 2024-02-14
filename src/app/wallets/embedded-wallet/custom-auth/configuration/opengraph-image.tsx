import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Configure Authentication for Embedded Wallet",
		icon: "wallets",
	});
}
