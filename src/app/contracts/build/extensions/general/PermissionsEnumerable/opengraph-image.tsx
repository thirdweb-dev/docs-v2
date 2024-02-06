import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "PermissionsEnumerable contract",
		icon: "solidity",
	});
}
