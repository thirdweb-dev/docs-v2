import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "ERC20DropVote contract",
		icon: "contract",
	});
}
