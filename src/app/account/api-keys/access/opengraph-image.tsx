import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Access thirdweb API Keys",
		icon: "thirdweb",
	});
}
