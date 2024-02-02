import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Airdrop ERC-721",
		icon: "contract",
	});
}
