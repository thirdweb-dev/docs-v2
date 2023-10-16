import { ReferenceLayout } from "@/components/Reference/ReferenceLayout";
import { Metadata } from "next";
import { fetchGoReference } from "./fetchGoReference";
import { Heading } from "@/components/Document/Heading";
import { CodeBlock, InlineCode } from "@/components/Document/Code";
import { Paragraph } from "@/components/Document/Paragraph";
import { Callout } from "@/components/Document/Callout";

export const metadata: Metadata = {
	title: "Go SDK | thirdweb docs",
	description: "Go SDK | thirdweb docs",
};

export default async function Page() {
	const goReference = await fetchGoReference();

	return (
		<ReferenceLayout
			lang="go"
			sideBar={{
				name: "Go SDK",
				links: {
					classes: goReference.types.map((type) => {
						return {
							name: type.typeName,
							href: `/go/references/${type.typeName}`,
						};
					}),
					functions: goReference.functions.map((func) => {
						return {
							name: func.functionName,
							href: `/go/references/${func.functionName}`,
						};
					}),
				},
			}}
			crumbs={[
				{ name: "Go", href: "/go" },
				{ name: "References", href: "/go/references" },
			]}
			customContent={<PageContent />}
		/>
	);
}

function PageContent() {
	const installation = (
		<section>
			<Heading id="installation" as="h2">
				Installation
			</Heading>
			<Paragraph>
				To install the SDK with the <InlineCode code="go get" /> command, run
				the following:
			</Paragraph>
			<CodeBlock
				lang="bash"
				code="go get github.com/thirdweb-dev/go-sdk/v2/thirdweb"
			/>
		</section>
	);

	const gettingStarted = (
		<section>
			<Heading id="get-started" as="h2">
				Getting Started
			</Heading>
			<Paragraph>
				Once you have all the necessary dependencies, you can follow the
				following setup steps to get started with SDK read-only functions:
			</Paragraph>

			<CodeBlock lang="go" code={getStartedCode} />
		</section>
	);

	const workingWithContracts = (
		<section>
			<Heading id="contracts" as="h2">
				Working With Contracts
			</Heading>
			<Paragraph>
				Once you instantiate the SDK, you can use it to access your thirdweb
				contracts. You can use {`SDK's`} contract getter functions like
				<InlineCode code="GetNFTCollection" />, <InlineCode code="GetEdition" />
				, and <InlineCode code="GetNFTDrop" />, to get the respective SDK
				contract instances. To use an NFT Collection contract for example, you
				can do the following.
			</Paragraph>
			<CodeBlock lang="go" code={workingWithContractsCode} />
		</section>
	);

	const signingTransactions = (
		<section>
			<Heading id="signing-transactions" as="h2">
				{" "}
				Signing Transactions{" "}
			</Heading>
			<Paragraph>
				In order to execute transactions on your contract, the SDK needs to know
				the wallet that is performing those transactions. For that it needs the
				private key of the wallet you want to execute transactions from.
			</Paragraph>
			<Callout variant="danger">
				Never commit private keys to file tracking history, or your account
				could be compromised.
			</Callout>
			<Paragraph>
				To connect your wallet to the SDK, you can use the following setup:
			</Paragraph>
			<CodeBlock lang="go" code={signingTransactionsCode} />
		</section>
	);

	return (
		<article>
			<Heading id="go-sdk" as="h1">
				Go SDK Reference
			</Heading>

			<Paragraph>Best in class web3 SDK for Go 1.16+</Paragraph>

			<div className="mt-10 flex flex-col gap-10">
				{installation}
				{gettingStarted}
				{workingWithContracts}
				{signingTransactions}
			</div>
		</article>
	);
}

const getStartedCode = `\
package main

import (
	"fmt"
	"github.com/thirdweb-dev/go-sdk/v2/thirdweb"
)

func main() {
	// Your secret key from the thirdweb api keys dashboard
	secretKey := "..."

	// Creates a new SDK instance to get read-only data for your contracts, you can pass:
	// - a chain name (mainnet, rinkeby, goerli, polygon, mumbai, avalanche, fantom)
	// - a custom RPC URL
	sdk, err := thirdweb.NewThirdwebSDK("mumbai", &thirdweb.SDKOptions{
		SecretKey: secretKey,
	})

	if err != nil {
		panic(err)
	}

	// Now we can interact with the SDK, like displaying the connected chain ID
	chainId, err := sdk.GetChainID()
	if err != nil {
		panic(err)
	}

	fmt.Println("New SDK instance create on chain", chainId)
}`;

const workingWithContractsCode = `\
package main

import (
	"fmt"
	"github.com/thirdweb-dev/go-sdk/v2/thirdweb"
)

func main() {
	// Get your secret key that you created from the thirdweb dashboard
	secretKey := "..."

	sdk, err := thirdweb.NewThirdwebSDK("mumbai", &thirdweb.SDKOptions{
		SecretKey: secretKey,
	})

	if err != nil {
		panic(err)
	}

	// Add your NFT Collection contract address here
	address := "0x..."
	nft, err := sdk.GetNFTCollection(address)
	if err != nil {
		panic(err)
	}

	// Now you can use any of the read-only SDK contract functions
	nfts, err := nft.GetAll()
	if err != nil {
		panic(err)
	}

	fmt.Printf("%d NFTs found on this contract\n", len(nfts))
}`;

const signingTransactionsCode = `\
package main

import (
	"fmt"
	"encoding/json"

	"github.com/thirdweb-dev/go-sdk/v2/thirdweb"
)

func main() {
	// Get your secret key that you created from the thirdweb dashboard
	secretKey := "..."

	// Get your private key securely (preferably from an environment variable)
	privateKey := "..."

	// Instantiate the SDK with your privateKey
	sdk, err := thirdweb.NewThirdwebSDK("mumbai", &thirdweb.SDKOptions{
		SecretKey: secretKey,
		PrivateKey: privateKey,
	})
	if err != nil {
		panic(err)
	}

	// Replace your contract address here
	address := "0x..."
	nft, err := sdk.GetNFTCollection(address)
	if err != nil {
		panic(err)
	}

	// Now you can execute transactions using the SDK contract functions
	tx, err := nft.Mint(
		&thirdweb.NFTMetadataInput{
			Name:        "Test NFT",
			Description: "Minted with the thirdweb Go SDK",
			Image: "ipfs://QmcCJC4T37rykDjR6oorM8hpB9GQWHKWbAi2YR1uTabUZu/0",
		},
	)
	if err != nil {
		panic(err)
	}

	result, _ := json.Marshal(&tx)
	fmt.Println(string(result))
}
`;
