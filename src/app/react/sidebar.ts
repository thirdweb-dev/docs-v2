import { SideBar } from "@/components/Layouts/DocLayout";
import { SidebarLink } from "@/components/others/Sidebar";

const wallets: SidebarLink = {
	name: "Wallets",
	href: "/react/wallets",
	links: [
		{
			name: "MetaMask Wallet",
			href: "/react/wallets/metamask",
		},
		{
			name: "Coinbase Wallet",
			href: "/react/wallets/coinbase",
		},
		{
			name: "WalletConnect",
			href: "/react/wallets/walletconnect",
		},
		{
			name: "Smart Wallet",
			href: "/react/wallets/smartwallet",
		},
		{
			name: "Embedded Wallet",
			href: "/react/wallets/embedded-wallet",
		},
		{
			name: "Local Wallet",
			href: "/react/wallets/local-wallet",
		},
		{
			name: "Trust Wallet",
			href: "/react/wallets/trust",
		},
		{
			name: "Zerion Wallet",
			href: "/react/wallets/zerion",
		},
		{
			name: "Magic Link",
			href: "/react/wallets/magiclink",
		},
		{
			name: "Safe",
			href: "/react/wallets/safe",
		},
		{
			name: "Blocto Wallet",
			href: "/react/wallets/blocto",
		},
		{
			name: "Frame Wallet",
			href: "/react/wallets/frame",
		},
		{
			name: "Phantom Wallet",
			href: "/react/wallets/phantom",
		},
		{
			name: "Rainbow Wallet",
			href: "/react/wallets/rainbow",
		},
		{
			name: "Paper Wallet",
			href: "/react/wallets/paper",
		},
	],
};

const components: SidebarLink = (() => {
	const parentSlug = "/react/components";
	return {
		name: "Components",
		links: [
			{
				name: "ConnectWallet",
				href: `${parentSlug}/ConnectWallet`,
			},
			{
				name: "Web3Button",
				href: `${parentSlug}/Web3Button`,
			},
			{
				name: "ThirdwebNftMedia",
				href: `${parentSlug}/ThirdwebNftMedia`,
			},
			{
				name: "MediaRenderer",
				href: `${parentSlug}/MediaRenderer`,
			},
		],
	};
})();

const claimConditionHooks: SidebarLink = (() => {
	const parentSlug = "/react/hooks/claim-conditions";
	return {
		name: "Claim Conditions",
		href: parentSlug,
		links: [
			{
				name: "useActiveClaimCondition",
				href: `${parentSlug}/useActiveClaimCondition`,
			},
			{
				name: "useActiveClaimConditionForWallet",
				href: `${parentSlug}/useActiveClaimConditionForWallet`,
			},
			{
				name: "useClaimConditions",
				href: `${parentSlug}/useClaimConditions`,
			},
			{
				name: "useClaimerProofs",
				href: `${parentSlug}/useClaimerProofs`,
			},
			{
				name: "useClaimIneligibilityReasons",
				href: `${parentSlug}/useClaimIneligibilityReasons`,
			},
			{
				name: "useSetClaimConditions",
				href: `${parentSlug}/useSetClaimConditions`,
			},
		],
	};
})();

const delayedRevealHooks: SidebarLink = (() => {
	const parentSlug = "/react/hooks/delayed-reveal";
	return {
		name: "Delayed Reveal",
		href: parentSlug,
		links: [
			{
				name: "useBatchesToReveal",
				href: `${parentSlug}/useBatchesToReveal`,
			},
			{
				name: "useDelayedRevealLazyMint",
				href: `${parentSlug}/useDelayedRevealLazyMint`,
			},
			{
				name: "useRevealLazyMint",
				href: `${parentSlug}/useRevealLazyMint`,
			},
		],
	};
})();

const marketplaceHooks: SidebarLink = (() => {
	const parentSlug = "/react/hooks/marketplace";
	return {
		name: "Marketplace",
		href: parentSlug,
		links: [
			{
				name: "useAcceptDirectListingOffer",
				href: `${parentSlug}/useBatchesToReveal`,
			},
			{
				name: "useActiveListings",
				href: `${parentSlug}/useActiveListings`,
			},
			{
				name: "useAuctionWinner",
				href: `${parentSlug}/useAuctionWinner`,
			},
			{
				name: "useBidBuffer",
				href: `${parentSlug}/useBidBuffer`,
			},
			{
				name: "useBuyDirectListing",
				href: `${parentSlug}/useBuyDirectListing`,
			},
			{
				name: "useBuyNow",
				href: `${parentSlug}/useBuyNow`,
			},
			{
				name: "useCancelDirectListing",
				href: `${parentSlug}/useCancelDirectListing`,
			},
			{
				name: "useCancelEnglishAuction",
				href: `${parentSlug}/useCancelEnglishAuction`,
			},
			{
				name: "useCancelListing",
				href: `${parentSlug}/useCancelListing`,
			},
			{
				name: "useCreateAuctionListing",
				href: `${parentSlug}/useCreateAuctionListing`,
			},
			{
				name: "useCreateDirectListing",
				href: `${parentSlug}/useCreateDirectListing`,
			},
			{
				name: "useDirectListing",
				href: `${parentSlug}/useDirectListing`,
			},
			{
				name: "useDirectListings",
				href: `${parentSlug}/useDirectListings`,
			},
			{
				name: "useDirectListingsCount",
				href: `${parentSlug}/useDirectListingsCount`,
			},
			{
				name: "useEnglishAuction",
				href: `${parentSlug}/useEnglishAuction`,
			},
			{
				name: "useEnglishAuctions",
				href: `${parentSlug}/useEnglishAuctions`,
			},
			{
				name: "useEnglishAuctionsCount",
				href: `${parentSlug}/useEnglishAuctionsCount`,
			},
			{
				name: "useEnglishAuctionWinningBid",
				href: `${parentSlug}/useEnglishAuctionWinningBid`,
			},
			{
				name: "useExecuteAuctionSale",
				href: `${parentSlug}/useExecuteAuctionSale`,
			},
			{
				name: "useListing",
				href: `${parentSlug}/useListing`,
			},
			{
				name: "useListings",
				href: `${parentSlug}/useListings`,
			},
			{
				name: "useListingsCount",
				href: `${parentSlug}/useListingsCount`,
			},
			{
				name: "useMakeBid",
				href: `${parentSlug}/useMakeBid`,
			},
			{
				name: "useMakeOffer",
				href: `${parentSlug}/useMakeOffer`,
			},
			{
				name: "useMinimumNextBid",
				href: `${parentSlug}/useMinimumNextBid`,
			},
			{
				name: "useOffers",
				href: `${parentSlug}/useOffers`,
			},
			{
				name: "useValidDirectListings",
				href: `${parentSlug}/useValidDirectListings`,
			},
			{
				name: "useValidEnglishAuctions",
				href: `${parentSlug}/useValidEnglishAuctions`,
			},
			{
				name: "useWinningBid",
				href: `${parentSlug}/useWinningBid`,
			},
		],
	};
})();

const hooks: SidebarLink = {
	name: "Hooks",
	href: "/react/hooks",
	links: [
		{
			name: "useAddress",
			href: "/react/hooks/useAddress",
		},
		{
			name: "useContract",
			href: "/react/hooks/useContract",
		},
		claimConditionHooks,
		delayedRevealHooks,
		marketplaceHooks,
	],
};

export const sidebar: SideBar = {
	name: "React SDK",
	links: [
		{
			name: "Overview",
			href: "/react",
		},
		{
			name: "Getting Started",
			href: "/react/getting-started",
		},
		{
			name: "ThirdwebProvider",
			href: "/react/ThirdwebProvider",
		},
		{
			name: "ThirdwebSDKProvider",
			href: "/react/ThirdwebSDKProvider",
		},
		{
			name: "Connecting Wallets",
			href: "/react/connecting-wallets",
		},
		wallets,
		components,
		hooks,
		{
			name: "Migration Guide",
			href: "/react/migration-guide",
		},
		{
			name: "Full Reference",
			href: "/references/react",
		},
	],
};
