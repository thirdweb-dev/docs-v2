import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Export private key of Embedded Wallet",
		icon: "wallets",
	});
}
