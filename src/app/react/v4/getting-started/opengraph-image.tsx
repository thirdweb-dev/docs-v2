import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Getting started with thirdweb React SDK",
		icon: "react",
	});
}
