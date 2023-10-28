import { getTypedocLayout } from "@/components/RenderDoc/SlugPage";
import { fetchReactNativeDoc } from "@/components/RenderDoc/fetchDocs/fetchReactNativeDoc";

export default getTypedocLayout({
	getDoc: fetchReactNativeDoc,
	packageSlug: "react-native",
	sdkTitle: "React Native SDK",
});
