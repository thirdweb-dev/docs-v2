import { getTypedocLayout } from "@/components/RenderDoc/SlugPage";
import { fetchWalletsDoc } from "@/components/RenderDoc/fetchDocs/fetchWalletsDoc";

export default getTypedocLayout({
	getDoc: fetchWalletsDoc,
	packageSlug: "wallets",
	sdkTitle: "Wallet SDK",
});
