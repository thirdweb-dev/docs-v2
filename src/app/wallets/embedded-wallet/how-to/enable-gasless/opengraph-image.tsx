import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Enable Gasless Transactions with Embedded Wallet",
		icon: "wallets",
	});
}
