import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Edit thirdweb API Key",
		icon: "thirdweb",
	});
}
