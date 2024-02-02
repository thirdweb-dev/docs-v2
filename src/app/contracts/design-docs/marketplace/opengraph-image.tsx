import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Marketplace V3 design document",
		icon: "contract",
	});
}
