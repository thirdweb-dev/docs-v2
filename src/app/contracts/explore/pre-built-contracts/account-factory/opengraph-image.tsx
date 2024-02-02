import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Account Factory Contract",
		icon: "contract",
	});
}
