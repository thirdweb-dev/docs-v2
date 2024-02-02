import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Airdrop ERC721 Claimable contract",
		icon: "contract",
	});
}
