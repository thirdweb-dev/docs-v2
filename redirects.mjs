// @ts-check

const reactRedirects = {
	// providers
	"/react/react.thirdwebprovider": "/react/v4/ThirdwebProvider",
	"/react/react.thirdwebsdkprovider": "/react/v4/ThirdwebSDKProvider",
	// components
	"/react/react.connectwallet": "/react/v4/components/ConnectWallet",
	"/react/react.web3button": "/react/v4/components/Web3Button",
	"/react/react.thirdwebnftmedia": "/react/v4/components/ThirdwebNftMedia",
	"/react/react.mediarenderer": "/react/v4/components/MediaRenderer",
	// wallets
	"/react/react.metamaskwallet": "/references/react/v4/metamaskWallet",
	"/react/react.coinbasewallet": "/references/react/v4/coinbaseWallet",
	"/react/react.walletconnect": "/references/react/v4/walletconnect",
	"/react/react.smartwallet": "/references/react/v4/smartWallet",
	"/react/react.embeddedwallet": "/references/react/v4/embeddedWallet",
	"/react/react.paperwallet": "/references/react/v4/embeddedWallet",
	"/react/react.localwallet": "/references/react/v4/localWallet",
	"/react/react.trustWallet": "/references/react/v4/trustWallet",
	"/react/react.zerion": "/references/react/v4/zerionWallet",
	"/react/react.magiclink": "/references/react/v4/magicLink",
	"/react/react.safewallet": "/references/react/v4/safeWallet",
	"/react/react.blocto": "/references/react/v4/bloctoWallet",
	"/react/react.frame": "/references/react/v4/frameWallet",
	"/react/react.phantom": "/references/react/v4/phantomWallet",
	"/react/react.rainbowWallet": "/references/react/v4/rainbowWallet",
	"/react/react.coin98": "/references/react/v4/coin98Wallet",
	"/react/react.core": "/references/react/v4/coreWallet",
	"/react/react.defiwallet": "/references/react/v4/cryptoDefiWallet",
	"/react/react.okx": "/references/react/v4/okxWallet",
	"/react/react.onekey": "/references/react/v4/oneKeyWallet",
	"/react/react.rabby": "/references/react/v4/rabbyWallet",
	// hooks
	"/react/react.useaddress": "/references/react/v4/useAddress",
	"/react/react.usecontract": "/references/react/v4/useContract",
	"/react/react.usecontractread": "/references/react/v4/useContractRead",
	"/react/react.usecontractwrite": "/references/react/v4/useContractWrite",
	"/react/react.usecontractevents": "/references/react/v4/useContractEvents",
	"/react/react.usesdk": "/references/react/v4/useSDK",
	"/react/react.useactiveclaimcondition": "/references/react/v4/useActiveClaimCondition",
	"/react/react.useactiveclaimconditionforwallet": "/references/react/v4/useActiveClaimConditionForWallet",
	"/react/react.useclaimconditions": "/references/react/v4/useClaimConditions",
	"/react/react.useclaimerproofs": "/references/react/v4/useClaimerProofs",
	"/react/react.useclaimineligibilityreasons": "/references/react/v4/useClaimIneligibilityReasons",
	"/react/react.usesetclaimconditions": "/references/react/v4/useSetClaimConditions",
	"/react/react.usebatchestoreveal": "/references/react/v4/useBatchesToReveal",
	"/react/react.usedelayedreveallazymint": "/references/react/v4/useDelayedRevealLazyMint",
	"/react/react.usereveallazymint": "/references/react/v4/useRevealLazyMint",
	"/react/react.useacceptdirectlistingoffer": "/references/react/v4/useAcceptDirectListingOffer",
	"/react/react.useactivelistings": "/references/react/v4/useActiveListings",
	"/react/react.useauctionwinner": "/references/react/v4/useAuctionWinner",
	"/react/react.usebidbuffer": "/references/react/v4/useBidBuffer",
	"/react/react.usebuydirectlisting": "/references/react/v4/useBuyDirectListing",
	"/react/react.usebuynow": "/references/react/v4/useBuyNow",
	"/react/react.usecanceldirectlisting": "/references/react/v4/useCancelDirectListing",
	"/react/react.usecancelenglishauction": "/references/react/v4/useCancelEnglishAuction",
	"/react/react.usecancellisting": "/references/react/v4/useCancelListing",
	"/react/react.usecreateauctionlisting": "/references/react/v4/useCreateAuctionListing",
	"/react/react.usecreatedirectlisting": "/references/react/v4/useCreateDirectListing",
	"/react/react.usedirectlisting": "/references/react/v4/useDirectListing",
	"/react/react.usedirectlistings": "/references/react/v4/useDirectListings",
	"/react/react.usedirectlistingscount": "/references/react/v4/useDirectListingsCount",
	"/react/react.useenglishauction": "/references/react/v4/useEnglishAuction",
	"/react/react.useenglishauctions": "/references/react/v4/useEnglishAuctions",
	"/react/react.useenglishauctionscount": "/references/react/v4/useEnglishAuctionsCount",
	"/react/react.useenglishauctionwinningbid": "/references/react/v4/useEnglishAuctionWinningBid",
	"/react/react.useexecuteauctionsale": "/references/react/v4/useExecuteAuctionSale",
	"/react/react.uselisting": "/references/react/v4/useListing",
	"/react/react.uselistings": "/references/react/v4/useListings",
	"/react/react.uselistingscount": "/references/react/v4/useListingsCount",
	"/react/react.usemakebid": "/references/react/v4/useMakeBid",
	"/react/react.usemakeoffer": "/references/react/v4/useMakeOffer",
	"/react/react.useminimumnextbid": "/references/react/v4/useMinimumNextBid",
	"/react/react.useoffers": "/references/react/v4/useOffers",
	"/react/react.usevaliddirectlistings": "/references/react/v4/useValidDirectListings",
	"/react/react.usevalidenglishauctions": "/references/react/v4/useValidEnglishAuctions",
	"/react/react.usewinningbid": "/references/react/v4/useWinningBid",
	"/react/react.usecompilermetadata": "/references/react/v4/useCompilerMetadata",
	"/react/react.usecontracttype": "/references/react/v4/useContractType",
	"/react/react.usemetadata": "/references/react/v4/useMetadata",
	"/react/react.useresolvedmediatype": "/references/react/v4/useResolvedMediaType",
	"/react/react.useupdatemetadata": "/references/react/v4/useUpdateMetadata",
	"/react/react.usechain": "/references/react/v4/useChain",
	"/react/react.useSwitchChain": "/references/react/v4/useSwitchChain",
	"/react/react.usechainid": "/references/react/v4/useChainId",
	"/react/react.usenft": "/references/react/v4/useNFT",
	"/react/react.useairdropnft": "/references/react/v4/useAirdropNFT",
	"/react/react.useburnnft": "/references/react/v4/useBurnNFT",
	"/react/react.usemintnft": "/references/react/v4/useMintNFT",
	"/react/react.usemintnftsupply": "/references/react/v4/useMintNFTSupply",
	"/react/react.usenftbalance": "/references/react/v4/useNFTBalance",
	"/react/react.usenfts": "/references/react/v4/useNFTs",
	"/react/react.useownednfts": "/references/react/v4/useOwnedNFTs",
	"/react/react.usetotalcirculatingsupply": "/references/react/v4/useTotalCirculatingSupply",
	"/react/react.usetotalcount": "/references/react/v4/useTotalCount",
	"/react/react.usetransfernft": "/references/react/v4/useTransferNFT",
	"/react/react.useclaimednfts": "/references/react/v4/useClaimedNFTs",
	"/react/react.useclaimednftsupply": "/references/react/v4/useClaimedNFTSupply",
	"/react/react.useclaimnft": "/references/react/v4/useClaimNFT",
	"/react/react.uselazymint": "/references/react/v4/useLazyMint",
	"/react/react.useresetclaimconditions": "/references/react/v4/useResetClaimConditions",
	"/react/react.useunclaimednfts": "/references/react/v4/useUnclaimedNFTs",
	"/react/react.useunclaimednftsupply": "/references/react/v4/useUnclaimedNFTSupply",
	"/react/react.useallrolemembers": "/references/react/v4/useAllRoleMembers",
	"/react/react.usegrantrole": "/references/react/v4/useGrantRole",
	"/react/react.useisaddressrole": "/references/react/v4/useIsAddressRole",
	"/react/react.userevokerole": "/references/react/v4/useRevokeRole",
	"/react/react.userolemembers": "/references/react/v4/useRoleMembers",
	"/react/react.useplatformfees": "/references/react/v4/usePlatformFees",
	"/react/react.useprimarysalerecipient": "/references/react/v4/usePrimarySaleRecipient",
	"/react/react.useroyaltysettings": "/references/react/v4/useRoyaltySettings",
	"/react/react.useupdateplatformfees": "/references/react/v4/useUpdatePlatformFees",
	"/react/react.useupdateprimarysalerecipient": "/references/react/v4/useUpdatePrimarySaleRecipient",
	"/react/react.useupdateroyaltysettings": "/references/react/v4/useUpdateRoyaltySettings",
	"/react/react.usebalance": "/references/react/v4/useBalance",
	"/react/react.usebalanceforaddress": "/references/react/v4/useBalanceForAddress",
	"/react/react.useburntoken": "/references/react/v4/useBurnToken",
	"/react/react.useminttoken": "/references/react/v4/useMintToken",
	"/react/react.usetokenbalance": "/references/react/v4/useTokenBalance",
	"/react/react.usetokendecimals": "/references/react/v4/useTokenDecimals",
	"/react/react.usetokensupply": "/references/react/v4/useTokenSupply",
	"/react/react.usetransferbatchtoken": "/references/react/v4/useTransferBatchToken",
	"/react/react.usetransfertoken": "/references/react/v4/useTransferToken",
	"/react/react.useclaimtoken": "/references/react/v4/useClaimToken",
	"/react/react.useconnect": "/references/react/v4/useConnect",
	"/react/react.usedisconnect": "/references/react/v4/useDisconnect",
	"/react/react.usewallet": "/references/react/v4/useWallet",
	"/react/react.useconnectionstatus": "/references/react/v4/useConnectionStatus",
	"/react/react.usesigner": "/references/react/v4/useSigner",
	"/react/react.usemetamask": "/references/react/v4/useMetamask",
	"/react/react.usecoinbasewallet": "/references/react/v4/useCoinbaseWallet",
	"/react/react.usewalletconnect": "/references/react/v4/useWalletConnect",
	"/react/react.usesmartwallet": "/references/react/v4/useSmartWallet",
	"/react/react.useembeeddedwallet": "/references/react/v4/useEmbeddedWallet",
	"/react/react.usesafe": "/references/react/v4/useSafe",
	"/react/react.usemagic": "/references/react/v4/useMagic",
	"/react/react.userainbowwallet": "/references/react/v4/useRainbowWallet",
	"/react/react.usetrustwallet": "/references/react/v4/useTrustWallet",
	"/react/react.usebloctowallet": "/references/react/v4/useBloctoWallet",
	"/react/react.useframewallet": "/references/react/v4/useFrameWallet",
	"/react/react.usesetconnectedwallet": "/references/react/v4/useSetConnectedWallet",
	"/react/react.usesetconnectionstatus": "/references/react/v4/useSetConnectionStatus",
	"/react/react.usecreatewalletinstance": "/references/react/v4/useCreateWalletInstance",
	"/react/react.usewalletconfig": "/references/react/v4/useWalletConfig",
	"/react/react.useaccountadmins": "/references/react/v4/useAccountAdmins",
	"/react/react.useaccountadminsandsigners": "/references/react/v4/useAccountAdminsAndSigners",
	"/react/react.useaccountsigners": "/references/react/v4/useAccountSigners",
	"/react/react.useaddadmin": "/references/react/v4/useAddAdmin",
	"/react/react.usecreatesessionkey": "/references/react/v4/useCreateSessionKey",
	"/react/react.useremoveadmin": "/references/react/v4/useRemoveAdmin",
	"/react/react.userevokesessionkey": "/references/react/v4/useRevokeSessionKey",
	"/react/react.uselogin": "/references/react/v4/useLogin",
	"/react/react.uselogout": "/references/react/v4/useLogout",
	"/react/react.useuser": "/references/react/v4/useUser",
	"/react/react.usestorage": "/references/react/v4/useStorage",
	"/react/react.usestorageupload": "/references/react/v4/useStorageUpload",
};

const solidityRedirects = {
	"/solidity/extensions/": "/contracts/build/extensions/",
	"/solidity/extensions/erc721": "/contracts/build/extensions/erc-721/ERC721",
	"/solidity/extensions/erc1155": "/contracts/build/extensions/erc-1155/ERC1155",
	"/solidity/extensions/erc20mintable": "/contracts/build/extensions/erc-20/ERC20BatchMintable",
	"/solidity/base-contracts/erc721base": "/contracts/build/base-contracts/erc-721/base",
	"/solidity/base-contracts/erc721delayedreveal": "/contracts/build/base-contracts/erc-721/delayed-reveal",
	"/solidity/base-contracts/erc721drop": "/contracts/build/base-contracts/erc-721/drop",
	"/solidity/base-contracts/erc721lazymint": "/contracts/build/base-contracts/erc-721/lazy-mint",
	"/solidity/base-contracts/erc721signaturemint": "/contracts/build/base-contracts/erc-721/signature-mint",
	"/solidity/extensions/erc721mintable": "/contracts/build/extensions/erc-721/ERC721Mintable",
	"/solidity/extensions/erc721burnable": "/contracts/build/extensions/erc-721/ERC721Burnable",
	"/solidity/extensions/erc721batchmintable": "/contracts/build/extensions/erc-721/ERC721BatchMintable",
	"/solidity/extensions/erc721supply": "/contracts/build/extensions/erc-721/ERC721Supply",
	"/solidity/extensions/royalty": "/contracts/build/extensions/general/Royalty",
	"/solidity/extensions/erc721claimphases": "/contracts/build/extensions/erc-721/ERC721ClaimPhases",
	"/solidity/extensions/contractmetadata": "/contracts/build/extensions/general/ContractMetadata",
	"/solidity/extensions/ownable": "/contracts/build/extensions/general/Ownable",
	"/solidity/extensions/multicall": "/contracts/build/extensions/general/Multicall",
	"/solidity/extensions/dropsinglephase": "/contracts/build/extensions/general/DropSinglePhase",
	"/solidity/extensions/erc1155batchmintable": "/contracts/build/extensions/erc-1155/ERC1155BatchMintable",
	"/solidity/extensions/erc1155burnable": "/contracts/build/extensions/erc-1155/ERC1155Burnable",
	"/solidity/extensions/erc1155enumerable": "/contracts/build/extensions/erc-1155/ERC1155Enumerable",
	"/solidity/extensions/erc1155mintable": "/contracts/build/extensions/erc-1155/ERC1155Mintable",
	"/solidity/base-contracts/erc1155lazymint": "/contracts/build/base-contracts/erc-1155/lazy-mint",
	"/solidity/extensions/lazymint": "/contracts/build/extensions/general/LazyMint",
	"/solidity/extensions/erc1155claimcustom": "/contracts/build/extensions/erc-1155/ERC1155ClaimCustom",
	"/solidity/extensions/delayedreveal": "/contracts/build/extensions/general/DelayedReveal",
	"/solidity/extensions/erc1155dropsinglephase": "/contracts/build/extensions/erc-1155/ERC1155DropSinglePhase",
	"/solidity/extensions/erc1155claimconditions": "/contracts/build/extensions/erc-1155/ERC1155ClaimConditions",
	"/solidity/extensions/primarysale": "/contracts/build/extensions/general/PrimarySale",
	"/solidity/extensions/erc1155signaturemint": "/contracts/build/extensions/erc-1155/ERC1155SignatureMint",
	"/solidity/base-contracts/erc1155base": "/contracts/build/base-contracts/erc-1155/base",
	"/solidity/extensions/erc20Permit": "/contracts/build/extensions/erc-20/ERC20Permit",
	"/solidity/extensions/erc20batchmintable": "/contracts/build/extensions/erc-20/ERC20BatchMintable",
	"/solidity/base-contracts/erc20base": "/contracts/build/base-contracts/erc-20/base",
	"/solidity/extensions/erc20": "/contracts/build/extensions/erc-20/ERC20",
	"/solidity/base-contracts/erc20vote": "/contracts/build/base-contracts/erc-20/base",
	"/solidity/extensions/base-account": "/contracts/build/extensions/erc-4337/SmartWallet",
	"/solidity/base-contracts/account-factory": "/contracts/build/base-contracts/erc-4337/account-factory",
	"/solidity/base-contracts/account": "/contracts/build/base-contracts/erc-4337/account",
	"/solidity/base-contracts/dynamic-account-factory": "/contracts/build/base-contracts/erc-4337/dynamic-account-factory",
	"/solidity/base-contracts/dynamic-account": "/contracts/build/base-contracts/erc-4337/dynamic-account",
	"/solidity/base-contracts/managed-account-factory": "/contracts/build/base-contracts/erc-4337/managed-account-factory",
	"/solidity/base-contracts/managed-account": "/contracts/build/base-contracts/erc-4337/managed-account",
	"/solidity/extensions/erc721claimcustom": "/contracts/build/extensions/erc-721/ERC721ClaimCustom",
	"/solidity/extensions/permissions": "/contracts/build/extensions/general/Permissions",
	"/solidity/base-contracts/erc1155drop": "/contracts/build/base-contracts/erc-1155/drop",
	"/solidity/base-contracts/erc1155signaturemint": "/contracts/build/base-contracts/erc-1155/signature-mint",
	"/solidity/base-contracts/erc20signaturemint": "/contracts/build/base-contracts/erc-20/signature-mint",
};

/**
 * @type {import('next').NextConfig['redirects']}
 */
export const redirects = async () => {
	return [
		// old portal redirects
		...createRedirects(reactRedirects),
		...createRedirects(solidityRedirects),
		// references docs
		latestReference("react", "v4"),
		latestReference("react-native", "v0"),
		latestReference("typescript", "v4"),
		latestReference("wallets", "v2"),
		latestReference("storage", "v2"),
		// sdk docs
		latestSDK("react", "v4"),
		latestSDK("react-native", "v0"),
		latestSDK("typescript", "v4"),
		latestSDK("wallet-sdk", "v2"),
		latestSDK("storage", "v2"),
	];
};

/**
 *
 * @param {Record<string, string>} linkMap
 * @returns
 */
function createRedirects(linkMap, permanent = true) {
	const redirects = [];
	for (const key in linkMap) {
		redirects.push({ source: key, destination: linkMap[key], permanent });
	}
	return redirects;
}

/**
 *
 * @param {string} pkg
 * @param {string} latestVersion
 * @returns
 */
function latestReference(pkg, latestVersion) {
	return {
		source: `/references/${pkg}/latest/:path*`,
		destination: `/references/${pkg}/${latestVersion}/:path*`,
		permanent: false,
	};
}

/**
 *
 * @param {string} pkg
 * @param {string} latestVersion
 * @returns
 */
function latestSDK(pkg, latestVersion) {
	return {
		source: `/${pkg}/latest/:path*`,
		destination: `/${pkg}/${latestVersion}/:path*`,
		permanent: false,
	};
}
