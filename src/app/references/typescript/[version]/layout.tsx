import { getTDocLayout } from "@/app/references/components/TDoc/PageLayout";
import { fetchTypeScriptDoc } from "@/app/references/components/TDoc/fetchDocs/fetchTypeScriptDoc";

export default getTDocLayout({
	getDoc: fetchTypeScriptDoc,
	packageSlug: "typescript",
	sdkTitle: "TypeScript SDK",
});
