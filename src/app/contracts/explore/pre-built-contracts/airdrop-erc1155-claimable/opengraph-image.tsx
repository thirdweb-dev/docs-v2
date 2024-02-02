import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Airdrop ERC1155 Claimable contract",
		icon: "contract",
	});
}
