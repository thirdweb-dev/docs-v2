import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Publish options | thirdweb Publish",
		icon: "contract",
	});
}
