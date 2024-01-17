import { SideBar } from "@/components/Layouts/DocLayout";
import { GamingIcon } from "@/icons";

const solutionsSlug = "/solutions";

export const sidebar: SideBar = {
	name: "Solutions",
	links: [
		{
			name: "Overview",
			href: `${solutionsSlug}`,
		},
		{ separator: true },
		{
			name: "Gaming",
			icon: <GamingIcon />,
			links: [
				{
					name: "Overview",
					href: `${solutionsSlug}/gaming/overview`,
				},
				{
					name: "Unreal Engine",
					links: [
						{
							name: "Quickstart",
							href: `${solutionsSlug}/gaming/unreal-engine/quickstart`,
						},
					],
				},
				{
					name: "Full Reference",
					links: [
						{
							name: "Unity",
							href: "/unity",
						},
						{
							name: "Engine API",
							href: "/engine/references/api-reference",
						},
					],
				},
			],
		},
	],
};
