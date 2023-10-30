import { getTypedocLayout } from "@/components/RenderDoc/TypedocPage";
import { fetchReactDoc } from "@/components/RenderDoc/fetchDocs/fetchReactDoc";

export default getTypedocLayout({
	getDoc: fetchReactDoc,
	packageSlug: "react",
	sdkTitle: "React SDK",
});
