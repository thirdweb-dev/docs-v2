import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "JSON Web Tokens",
		icon: "wallets",
	});
}
