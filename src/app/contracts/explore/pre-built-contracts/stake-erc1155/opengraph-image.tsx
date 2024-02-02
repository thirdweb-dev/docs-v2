import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Stake ERC1155 contract",
		icon: "contract",
	});
}
