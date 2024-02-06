import { getTDocPage } from "@/app/references/components/TDoc/PageLayout";
import { fetchReactDoc } from "@/app/references/components/TDoc/fetchDocs/fetchReactDoc";

const config = getTDocPage({
	sdkTitle: "React SDK",
	getDoc: fetchReactDoc,
	packageSlug: "react",
	async getVersions() {
		return ["v4"];
	},
});

export default config.default;
export const generateStaticParams = config.generateStaticParams;
export const generateMetadata = config.generateMetadata;
export const dynamicParams = config.dynamicParams;
