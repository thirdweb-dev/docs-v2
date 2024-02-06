import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Dynamic Account Factory contract",
		icon: "contract",
	});
}
