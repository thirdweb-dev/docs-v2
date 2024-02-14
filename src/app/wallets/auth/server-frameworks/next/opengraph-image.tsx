import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Integrate thirdweb Auth with Next.js",
		icon: "react",
	});
}
