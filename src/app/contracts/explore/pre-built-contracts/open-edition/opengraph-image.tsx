import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Open Edition ERC721",
		icon: "contract",
	});
}
