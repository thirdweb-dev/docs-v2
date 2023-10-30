import { getTypedocLayout } from "@/components/RenderDoc/TypedocPage";
import { fetchWalletsDoc } from "@/components/RenderDoc/fetchDocs/fetchWalletsDoc";

export default getTypedocLayout({
	getDoc: fetchWalletsDoc,
	packageSlug: "wallets",
	sdkTitle: "Wallet SDK",
});
