import { getTDocLayout } from "@/app/references/components/TDoc/PageLayout";
import { fetchStorageDoc } from "@/app/references/components/TDoc/fetchDocs/fetchStorageDoc";

export default getTDocLayout({
	getDoc: fetchStorageDoc,
	packageSlug: "storage",
	sdkTitle: "Storage SDK",
});
