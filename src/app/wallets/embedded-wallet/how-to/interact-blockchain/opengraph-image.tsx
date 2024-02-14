import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Interact with the blockchain with Embedded Wallet",
		icon: "wallets",
	});
}
