// @ts-check

/**
 * @type {import('next').NextConfig['redirects']}
 */
export const redirects = async () => {
	return [
		{
			source: "/react/react.thirdwebprovider",
			destination: "/react/ThirdwebProvider",
			permanent: true,
		},
		{
			source: "/react/react.thirdwebsdkprovider",
			destination: "/react/ThirdwebSDKProvider",
			permanent: true,
		},
		{
			source: "/react/react.metamaskwallet",
			destination: "/wallets/react/metamask",
			permanent: true,
		},
		{
			source: "/wallets/embedded-wallet",
			destination: "/wallets/embedded-wallet/overview",
			permanent: true,
		},
	];
};
