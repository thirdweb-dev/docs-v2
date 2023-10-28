import { getTypedocLayout } from "@/components/RenderDoc/SlugPage";
import { fetchReactDoc } from "@/components/RenderDoc/fetchDocs/fetchReactDoc";

export default getTypedocLayout({
	getDoc: fetchReactDoc,
	packageSlug: "react",
	sdkTitle: "React SDK",
});
