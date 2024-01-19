import { getTDocLayout } from "@/app/references/components/TDoc/PageLayout";
import { fetchReactDoc } from "@/app/references/components/TDoc/fetchDocs/fetchReactDoc";
import { createMetadata } from "@doc";

export default getTDocLayout({
	getDoc: fetchReactDoc,
	packageSlug: "react",
	sdkTitle: "React SDK",
});

export const metadata = createMetadata({
	title: "References | thirdweb React SDK ",
	description: "Full Reference for thirdweb React SDK.",
});
