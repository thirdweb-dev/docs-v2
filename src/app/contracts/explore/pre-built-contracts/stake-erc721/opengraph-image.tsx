import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Stake ERC721 contract",
		icon: "contract",
	});
}
