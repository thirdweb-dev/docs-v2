import { getTDocLayout } from "@/app/references/components/TDoc/PageLayout";
import { fetchStorageDoc } from "@/app/references/components/TDoc/fetchDocs/fetchStorageDoc";
import { createMetadata } from "@doc";

export default getTDocLayout({
	getDoc: fetchStorageDoc,
	packageSlug: "storage",
	sdkTitle: "Storage SDK",
});

export const metadata = createMetadata({
	title: "References | thirdweb storage SDK ",
	description: "Full Reference for thirdweb storage SDK.",
});

export const revalidate = 3600; // revalidate at most every hour
