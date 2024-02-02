import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Edition Drop contract",
		icon: "contract",
	});
}
