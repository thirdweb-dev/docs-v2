import { getTypedocPage } from "@/components/RenderDoc/TypedocPage";
import Content from "./content.mdx";
import { fetchReactNativeDoc } from "@/components/RenderDoc/fetchDocs/fetchReactNativeDoc";

const config = getTypedocPage({
	sdkTitle: "React Native SDK",
	getDoc: fetchReactNativeDoc,
	indexContent: <Content />,
	packageSlug: "react-native",
});

export default config.default;
export const generateStaticParams = config.generateStaticParams;
export const generateMetadata = config.generateMetadata;
export const dynamicParams = config.dynamicParams;
