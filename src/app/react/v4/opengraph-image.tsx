import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "thirdweb React SDK",
		icon: "react",
	});
}
