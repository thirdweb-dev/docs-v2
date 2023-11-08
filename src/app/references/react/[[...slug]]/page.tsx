import { getTDocPage } from "@/app/references/components/TDoc/PageLayout";
import Content from "./content.mdx";
import { fetchReactDoc } from "@/app/references/components/TDoc/fetchDocs/fetchReactDoc";

const config = getTDocPage({
	sdkTitle: "React SDK",
	getDoc: fetchReactDoc,
	indexContent: <Content />,
	packageSlug: "react",
});

export default config.default;
export const generateStaticParams = config.generateStaticParams;
export const generateMetadata = config.generateMetadata;
export const dynamicParams = config.dynamicParams;
