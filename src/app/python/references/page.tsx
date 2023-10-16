import { ReferenceLayout } from "@/components/Reference/ReferenceLayout";
import { Metadata } from "next";
import { fetchPythonReference } from "./fetchPythonReference";
import { Heading } from "@/components/Document/Heading";
import { Paragraph } from "@/components/Document/Paragraph";
import { CodeBlock, InlineCode } from "@/components/Document/Code";
import { DocLink } from "@/components/Document/DocLink";
import { Line } from "@/components/Document/Line";
import { Callout } from "@/components/Document/Callout";

export const metadata: Metadata = {
	title: "Python SDK | thirdweb docs",
	description: "Python SDK | thirdweb docs",
};

export default async function Page() {
	const data = await fetchPythonReference();

	return (
		<ReferenceLayout
			lang="python"
			sideBar={{
				name: "Python SDK",
				links: {
					classes: data.types.map((type) => {
						return {
							name: type.typeName,
							href: `/python/references/${type.typeName}`,
						};
					}),
				},
			}}
			crumbs={[
				{ name: "Python", href: "/python" },
				{ name: "References", href: "/python/references" },
			]}
			customContent={<PageContent />}
		/>
	);
}

function PageContent() {
	const title = (
		<Heading id="python-sdk" as="h1">
			Python SDK Reference
		</Heading>
	);

	const description = (
		<section>
			<Paragraph>Best in class Web3 SDK for Python 3.7+</Paragraph>

			<Paragraph>
				Connect to user{`'s`} wallets, interact with smart contracts, sign
				messages, and utilize common standards such as tokens, NFTs,
				marketplaces; all with built-in RPC URLs, IPFS gateways, and more.
			</Paragraph>
		</section>
	);

	const installation = (
		<section>
			<Heading id="installation" as="h2">
				Installation
			</Heading>

			<CodeBlock lang="bash" code="pip install thirdweb" />
		</section>
	);

	const getStarted = (
		<section>
			<Heading id="instantiate-sdk" as="h2">
				Getting Started
			</Heading>
			To start using this SDK, you just need to pass in a provider
			configuration. It is also strongly recommended that you use your thirdweb
			API keys with the SDK in order to get the best infrastructure performance
			(across RPCs, IPFS, etc.) - you can learn more about creating and using
			API keys{" "}
			<DocLink href="https://portal.thirdweb.com/api-keys" name="here" />
		</section>
	);

	const initializeSDK = (
		<section>
			<Heading id="instantiate-sdk" as="h2">
				Instantiating the SDK
			</Heading>
			<Paragraph>
				Once you have all the necessary dependencies, you can follow the
				following setup steps to get started with the SDK read-only functions:
			</Paragraph>
			<CodeBlock lang="python" code={sdkInitializationCode} />
			<Paragraph>
				The SDK supports the <InlineCode code='"mainnet"' />,{" "}
				<InlineCode code='"rinkeby"' />, <InlineCode code='"goerli"' />,{" "}
				<InlineCode code='"polygon"' />, <InlineCode code='"mumbai"' />,{" "}
				<InlineCode code='"fanctom"' />, and <InlineCode code='"avalanche"' />{" "}
				networks.
			</Paragraph>
			<Line />
			<Paragraph>
				Alternatively, if you want to use your own custom RPC URL, you can pass
				in the RPC URL directly as follows:
			</Paragraph>
			<CodeBlock lang="python" code={customRPCSDKInitCode} />
		</section>
	);

	const workingWithContracts = (
		<section>
			<Heading id="contracts" as="h2">
				Working With Contracts
			</Heading>

			<Paragraph>
				Once you instantiate the SDK, you can use it to access your thirdweb
				contracts. You can use the {`SDK's`} contract getter functions like
				<InlineCode code="get_token" />, <InlineCode code="get_edition" />,
				<InlineCode code="get_nft_collection" />, and{" "}
				<InlineCode code="get_marketplace" /> to get the respective SDK contract
				instances. To use an NFT Collection contract for example, you can do the
				following.
			</Paragraph>

			<CodeBlock lang="python" code={workingWithContractsCode} />
		</section>
	);

	const signingTransaction = (
		<section>
			<Heading as="h2" id="sign-transaction">
				Signing Transactions
			</Heading>

			<Callout variant="danger">
				Never commit private keys to file tracking history, or your account
				could be compromised
			</Callout>

			<Paragraph>
				if you want to use write functions as well and connect a signer, you can
				use the following setup:
			</Paragraph>

			<CodeBlock lang="python" code={signingTransactionCode} />
		</section>
	);

	return (
		<article>
			{title}
			<div className="flex flex-col gap-10">
				{description}
				{getStarted}
				{installation}
				{initializeSDK}
				{workingWithContracts}
				{signingTransaction}
			</div>
		</article>
	);
}

const sdkInitializationCode = `\
from thirdweb import ThirdwebSDK
from thirdweb.types import SDKOptions

# Get your secret key from the thirdweb api keys dashboard
SECRET_KEY = "..."

# You can create a new instance of the SDK to use by passing in a network name and your api key
sdk = ThirdwebSDK("mumbai", options=SDKOptions(secret_key=SECRET_KEY))
`;

const customRPCSDKInitCode = `\
from thirdweb import ThirdwebSDK

# Set your RPC_URL
RPC_URL = "https://rpc-mainnet.matic.network"

# And now you can instantiate the SDK with it
sdk = ThirdwebSDK(RPC_URL)
`;

const workingWithContractsCode = `\
# Add your NFT Collection contract address here
NFT_COLLECTION_ADDRESS = "0x.."

# And you can instantiate your contract with just one line
nft_collection = sdk.get_nft_collection(NFT_COLLECTION_ADDRESS)

# Now you can use any of the read-only SDK contract functions
nfts = nft_collection.get_all()
print(nfts)
`;

const signingTransactionCode = `\
from thirdweb import ThirdwebSDK
from thirdweb.types.nft import NFTMetadataInput
import os

# Get your secret key from the thirdweb api keys dashboard
SECRET_KEY = "..."

# This PRIVATE KEY is coming from your environment variables. Make sure to never put it in a tracked file or share it with anyone.
PRIVATE_KEY = os.environ.get("PRIVATE_KEY")

# Now you can create a new instance of the SDK with your private key
sdk = ThirdwebSDK.from_private_key(PRIVATE_KEY, "mumbai", options=SDKOptions(secret_key=SECRET_KEY))

# Instantiate a new NFT Collection contract as described above.
NFT_COLLECTION_ADDRESS = "0x.."
nft_collection = sdk.get_nft_collection(NFT_COLLECTION_ADDRESS)

# Now you can use any of the SDK contract functions including write functions
nft_collection.mint(NFTMetadataInput.from_json({ "name": "Cool NFT", "description": "Minted with the Python SDK!" }))
`;
