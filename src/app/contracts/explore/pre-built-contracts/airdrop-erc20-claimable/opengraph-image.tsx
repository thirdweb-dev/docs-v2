import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Airdrop ERC-20 (Claimable) Contract",
		icon: "contract",
	});
}
