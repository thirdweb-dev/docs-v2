import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "ERC721SignatureMint contract",
		icon: "solidity",
	});
}
