import { getTypedocPage } from "@/components/RenderDoc/SlugPage";
import Content from "./content.mdx";
import { fetchStorageDoc } from "@/components/RenderDoc/fetchDocs/fetchStorageDoc";

const config = getTypedocPage({
	sdkTitle: "Storage SDK",
	getDoc: fetchStorageDoc,
	indexContent: <Content />,
	packageSlug: "storage",
});

export default config.default;
export const generateStaticParams = config.generateStaticParams;
export const generateMetadata = config.generateMetadata;
export const dynamicParams = config.dynamicParams;
