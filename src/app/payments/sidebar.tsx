import { SideBar } from "@/components/Layouts/DocLayout";
import { PaymentsNFTCheckoutIcon } from "@/icons";

const checkoutSlug = "/payments/nft-checkout";
const gettingStartedSlug = "/payments/getting-started";

export const sidebar: SideBar = {
	name: "Payments",
	links: [
		{
			name: "Overview",
			href: "/payments",
		},
		{ separator: true },
		{
			name: "NFT Checkout",
			icon: <PaymentsNFTCheckoutIcon />,
			isCollapsible: false,
			links: [
				{
					name: "Getting Started",
					href: gettingStartedSlug,
					links: [
						{
							name: "Enable Contract",
							href: "/payments/enable-contract",
						},
						{
							name: "Create Checkout Link",
							href: "/payments/checkout-link",
						},
						{ name: "Go Live Checklist", href: "/payments/go-live-checklist" },
					],
				},

				{
					name: "Embedded Elements",

					links: [
						{
							name: "Overview",
							href: "/payments/elements",
						},
						{
							name: "CheckoutWithCard",
							href: "/payments/checkout-with-card",
						},
						{
							name: "CheckoutWithEth",
							href: "/payments/checkout-with-eth",
						},
					],
				},
				{
					name: "Webhooks",
					href: "/payments/webhooks",
				},
				{ name: "Translations", href: "/payments/translations" },
				{ name: "Marketplaces", href: "/payments/marketplaces" },
				{
					name: "One-Time Checkout Link",
					href: "/payments/one-time-checkout-link",
				},
				{
					name: "Thirdweb Contracts",
					href: "/payments/thirdweb-contracts",
				},
				{
					name: "Custom Contracts",
					href: "/payments/custom-contracts",
				},
				{
					name: "ERC-20 Pricing",
					href: "/payments/erc20-pricing",
				},
			],
		},
		{ separator: true },
		{ name: "API Reference", href: "/payments/api-reference" },
		{ name: "FAQ", href: "/payments/faq" },
	],
};
