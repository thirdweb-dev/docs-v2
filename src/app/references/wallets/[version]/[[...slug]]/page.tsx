import { getTDocPage } from "@/app/references/components/TDoc/PageLayout";
import { fetchWalletsDoc } from "@/app/references/components/TDoc/fetchDocs/fetchWalletsDoc";

const config = getTDocPage({
	sdkTitle: "Wallets SDK",
	getDoc: fetchWalletsDoc,
	packageSlug: "wallets",
	async getLatestVersion() {
		return "v2";
	},
});

export default config.default;
export const generateStaticParams = config.generateStaticParams;
export const generateMetadata = config.generateMetadata;
export const dynamicParams = config.dynamicParams;
