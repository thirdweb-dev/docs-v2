import { getTypedocLayout } from "@/components/RenderDoc/SlugPage";
import { fetchStorageDoc } from "@/components/RenderDoc/fetchDocs/fetchStorageDoc";

export default getTypedocLayout({
	getDoc: fetchStorageDoc,
	packageSlug: "storage",
	sdkTitle: "Storage SDK",
});
