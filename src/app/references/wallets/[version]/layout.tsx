import { getTDocLayout } from "@/app/references/components/TDoc/PageLayout";
import { fetchWalletsDoc } from "@/app/references/components/TDoc/fetchDocs/fetchWalletsDoc";

export default getTDocLayout({
	getDoc: fetchWalletsDoc,
	packageSlug: "wallets",
	sdkTitle: "Wallet SDK",
});
