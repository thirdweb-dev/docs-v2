import { getTypedocPage } from "@/components/RenderDoc/SlugPage";
import Content from "./content.mdx";
import { fetchTypeScriptDoc } from "@/components/RenderDoc/fetchDocs/fetchTypeScriptDoc";

const config = getTypedocPage({
	sdkTitle: "TypeScript SDK",
	getDoc: fetchTypeScriptDoc,
	indexContent: <Content />,
	packageSlug: "typescript",
});

export default config.default;
export const generateStaticParams = config.generateStaticParams;
export const generateMetadata = config.generateMetadata;
export const dynamicParams = config.dynamicParams;
