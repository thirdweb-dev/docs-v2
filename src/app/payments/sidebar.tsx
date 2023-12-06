import { SideBar } from "@/components/Layouts/DocLayout";
import { PaymentsNFTCheckoutIcon, PaymentsSponsoredIcon } from "@/icons";

const checkoutSlug = "/payments/nft-checkout";
const sponsoredSlug = "/payments/sponsored-transactions";

export const sidebar: SideBar = {
	name: "Payments",
	links: [
		{
			name: "Overview",
			href: "/payments",
		},
		{ separator: true },
		// Checkouts
		{
			name: "NFT Checkouts",
			icon: <PaymentsNFTCheckoutIcon />,
			isCollapsible: false,
			links: [
				{
					name: "Overview",
					href: `${checkoutSlug}/overview`,
				},
			],
		},
		// Sponsored Transactions
		{ separator: true },
		{
			name: "Sponsored Transactions",
			icon: <PaymentsSponsoredIcon />,
			isCollapsible: false,
			links: [
				{
					name: "Overview",
					href: `${sponsoredSlug}/overview`,
				},
			],
		},
	],
};
