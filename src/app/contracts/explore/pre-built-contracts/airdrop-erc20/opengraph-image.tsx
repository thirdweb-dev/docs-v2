import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Airdrop ERC-20 Contract",
		icon: "contract",
	});
}
