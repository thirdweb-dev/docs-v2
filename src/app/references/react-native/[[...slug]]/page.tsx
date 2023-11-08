import { getTDocPage } from "@/app/references/components/TDoc/PageLayout";
import Content from "./content.mdx";
import { fetchReactNativeDoc } from "@/app/references/components/TDoc/fetchDocs/fetchReactNativeDoc";

const config = getTDocPage({
	sdkTitle: "React Native SDK",
	getDoc: fetchReactNativeDoc,
	indexContent: <Content />,
	packageSlug: "react-native",
});

export default config.default;
export const generateStaticParams = config.generateStaticParams;
export const generateMetadata = config.generateMetadata;
export const dynamicParams = config.dynamicParams;
