import { SideBar } from "@/components/Layouts/DocLayout";
import { SidebarLink } from "@/components/others/Sidebar";

const wallets: SidebarLink = {
	name: "Wallets",
	href: "/react/wallets",
	links: [
		{
			name: "MetaMask",
			href: "/react/wallets/metamask",
		},
		{
			name: "Coinbase",
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
			name: "Zerion",
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
			name: "Blocto",
			href: "/react/wallets/blocto",
		},
		{
			name: "Frame",
			href: "/react/wallets/frame",
		},
		{
			name: "Phantom",
			href: "/react/wallets/phantom",
		},
		{
			name: "Rainbow",
			href: "/react/wallets/rainbow",
		},
		{
			name: "OKX Wallet",
			href: "/react/wallets/okx",
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
				href: `${parentSlug}/connect`,
			},
			{
				name: "Web3Button",
				href: `${parentSlug}/web3button`,
			},
			{
				name: "ThirdwebNftMedia",
				href: `${parentSlug}/thirdweb-nft-media`,
			},
			{
				name: "MediaRenderer",
				href: `${parentSlug}/media-renderer`,
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
			href: "/react/thirdweb-provider",
		},
		{
			name: "ThirdwebSDKProvider",
			href: "/react/thirdweb-sdk-provider",
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
