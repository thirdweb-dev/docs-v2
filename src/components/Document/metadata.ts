import { Metadata } from "next";

export function createMetadata(obj: {
	title: string;
	description: string;
}): Metadata {
	return {
		title: obj.title,
		metadataBase: new URL("https://portal.thirdweb.com"),
		twitter: {
			title: obj.title,
			description: obj.description,
		},
		openGraph: {
			title: obj.title,
			description: obj.description,
			locale: "en_US",
			type: "website",
		},
	};
}
