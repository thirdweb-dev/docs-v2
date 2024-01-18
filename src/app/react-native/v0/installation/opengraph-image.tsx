import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Installating thirdweb React Native SDK",
		icon: "react",
	});
}
