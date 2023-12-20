import { getTDocLayout } from "@/app/references/components/TDoc/PageLayout";
import { fetchReactNativeDoc } from "@/app/references/components/TDoc/fetchDocs/fetchReactNativeDoc";

export default getTDocLayout({
	getDoc: fetchReactNativeDoc,
	packageSlug: "react-native",
	sdkTitle: "React Native SDK",
});
