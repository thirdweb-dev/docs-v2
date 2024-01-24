import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Upgrade thirdweb Account",
		icon: "thirdweb",
	});
}
