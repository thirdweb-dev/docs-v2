import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Build Custom Experiences for connecting wallet",
		icon: "thirdweb",
	});
}
