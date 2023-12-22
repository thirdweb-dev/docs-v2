import { getTDocLayout } from "@/app/references/components/TDoc/PageLayout";
import { fetchReactDoc } from "@/app/references/components/TDoc/fetchDocs/fetchReactDoc";

export default getTDocLayout({
	getDoc: fetchReactDoc,
	packageSlug: "react",
	sdkTitle: "React SDK",
});
