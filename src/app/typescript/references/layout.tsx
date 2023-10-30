import { getTypedocLayout } from "@/components/RenderDoc/TypedocPage";
import { fetchTypeScriptDoc } from "@/components/RenderDoc/fetchDocs/fetchTypeScriptDoc";

export default getTypedocLayout({
	getDoc: fetchTypeScriptDoc,
	packageSlug: "typescript",
	sdkTitle: "TypeScript SDK",
});
