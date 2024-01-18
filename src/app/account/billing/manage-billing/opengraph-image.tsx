import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Manage billing for thirdweb Account",
		icon: "thirdweb",
	});
}
