import { getTypedocPage } from "@/components/RenderDoc/SlugPage";
import Content from "./content.mdx";
import { fetchReactDoc } from "@/components/RenderDoc/fetchDocs/fetchReactDoc";

const config = getTypedocPage({
	sdkTitle: "React SDK",
	getDoc: fetchReactDoc,
	indexContent: <Content />,
	path: "/react/references",
});

export default config.default;
export const generateStaticParams = config.generateStaticParams;
export const generateMetadata = config.generateMetadata;
export const dynamicParams = config.dynamicParams;
