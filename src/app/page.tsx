import Image from "next/image";
import DocsHero from "./_images/docs-hero.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DocLink, Heading, Grid, SDKCard } from "@/components/Document";

// icons
import {
	ChevronRight,
	CircleDollarSign,
	Gamepad2,
	LucideIcon,
	MousePointerSquare,
	ShoppingBag,
	User,
} from "lucide-react";
import {
	ReactIcon,
	TypeScriptIcon,
	PythonIcon,
	GoIcon,
	UnityIcon,
	SolidityIcon,
	ContractBuildIcon,
	ContractExploreIcon,
	ContractInteractIcon,
	ContractDeployIcon,
	ContractPublishIcon,
	InfraEngineIcon,
	InfraRPCIcon,
	InfraStorageIcon,
	WalletsAuthIcon,
	WalletsConnectIcon,
	WalletsEmbeddedIcon,
	WalletsSmartIcon,
	PaymentsNFTCheckoutIcon,
} from "@/icons";

export default function Page() {
	return (
		<main className="container grow pb-20">
			<Hero />
			<TutorialsSection />
			<WalletsSection />
			<ContractsSection />
			<PaymentSection />
			<InfraSection />
			<SDKSection />
		</main>
	);
}

function Hero() {
	return (
		<section className="grid py-10 lg:grid-cols-2  xl:py-2 ">
			{/* Left */}
			<div className="flex flex-col justify-center">
				<div>
					<h1 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
						thirdweb Documentation
					</h1>
					<p className="mb-8 max-w-md text-lg leading-7 text-f-300 md:text-xl">
						Everything you need to connect your apps and games to decentralized
						networks.
					</p>
					<div className="flex flex-wrap gap-4">
						<Button
							asChild
							variant="accent"
							className="text-lg lg:min-w-[150px] lg:px-10"
						>
							<Link href="https://www.youtube.com/watch?v=jYEqoIeAoBg&t=2067s">
								Learn
							</Link>
						</Button>
						<Button
							variant="outline"
							className="text-lg lg:min-w-[150px] lg:px-10"
							asChild
						>
							<Link href="/#wallets">Explore Products</Link>
						</Button>
					</div>
				</div>
			</div>

			{/* right */}
			<div className="hidden justify-center lg:flex">
				<Image src={DocsHero} alt="" className="w-full" />
			</div>
		</section>
	);
}

function TutorialsSection() {
	return (
		<section className="py-10">
			<SectionTitle id="tutorials" title="Popular Tutorials" />

			<Grid>
				<TutorialCard
					icon={ShoppingBag}
					viewAllHref="/"
					title="Commerce"
					links={[
						{
							name: "Create a web3 Shopify theme",
							href: "https://blog.thirdweb.com/guides/create-a-shopify-theme-with-thirdweb/",
						},
						{
							name: "Create Loyalty Points",
							href: "/",
						},
						{
							name: "Some other Tutorial",
							href: "/",
						},
					]}
				/>

				<TutorialCard
					icon={Gamepad2}
					viewAllHref="/"
					title="Gaming"
					links={[
						{
							name: "In-game currencies",
							href: "/",
						},
						{
							name: "NFT character creation",
							href: "/",
						},
						{
							name: "In-game marketplace",
							href: "/",
						},
					]}
				/>

				<TutorialCard
					icon={User}
					viewAllHref="/"
					title="Membership"
					links={[
						{
							name: "Create a DAO",
							href: "/",
						},
						{
							name: "On-chain voting",
							href: "/",
						},
						{
							name: "Fiat checkout",
							href: "/",
						},
					]}
				/>

				<TutorialCard
					icon={CircleDollarSign}
					viewAllHref="/"
					title="DeFi"
					links={[
						{
							name: "Create a DEX",
							href: "/",
						},
						{
							name: "Staking APp",
							href: "/",
						},
						{
							name: "Some other Tutorial",
							href: "/",
						},
					]}
				/>

				<TutorialCard
					icon={MousePointerSquare}
					viewAllHref="/"
					title="No-code"
					links={[
						{
							name: "Create an NFT drop",
							href: "/",
						},
						{
							name: "Airdrop ERC-2o tokens",
							href: "/",
						},
						{
							name: "Some other tutorial",
							href: "/",
						},
					]}
				/>
			</Grid>
		</section>
	);
}

function TutorialCard(props: {
	title: string;
	links: Array<{ name: string; href: string }>;
	viewAllHref: string;
	icon: LucideIcon;
}) {
	return (
		<div className="rounded-lg border bg-b-800 p-6">
			<div className="mb-6 flex items-center gap-3">
				<props.icon className="h-6 w-6 text-f-300" />
				<Heading level={3} id={props.title} anchorClassName="mb-0 mt-0">
					{props.title}
				</Heading>
			</div>

			<div className="mb-8 flex flex-col gap-3">
				{props.links.map((link) => {
					return (
						<DocLink href={link.href} key={link.href}>
							{link.name}
						</DocLink>
					);
				})}
			</div>

			<Link
				href={props.viewAllHref}
				className="group/link inline-flex items-center gap-2 text-f-300 transition-colors hover:text-f-100"
			>
				View all
				<ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
			</Link>
		</div>
	);
}

function WalletsSection() {
	return (
		<section className="py-10">
			<SectionTitle id="wallets" title="Wallets" />

			<Grid>
				<ArticleCard
					href="/wallets/connect"
					title="Connect"
					description="Fully customizable Connect Wallet component"
					icon={WalletsConnectIcon}
				/>
				<ArticleCard
					href="/wallets/smart"
					title="Smart Wallet"
					description="Complete toolkit for Account Abstraction"
					icon={WalletsSmartIcon}
				/>
				<ArticleCard
					title="Embedded Wallets"
					description="Email & social login wallets for your customers"
					href="/wallets/embedded-wallet"
					icon={WalletsEmbeddedIcon}
				/>
				<ArticleCard
					href="/wallets/auth"
					title="Auth"
					description="Authenticate users with their wallets"
					icon={WalletsAuthIcon}
				/>
			</Grid>
		</section>
	);
}

function ContractsSection() {
	return (
		<section className="py-10">
			<SectionTitle id="contracts" title="Contracts" />

			<Grid>
				<ArticleCard
					title="Deploy"
					description="Contract deployment build for any use-case"
					href="/contracts/deploy"
					icon={ContractDeployIcon}
				/>
				<ArticleCard
					title="Build"
					description="Write your own smart contracts"
					href="/contracts/build"
					icon={ContractBuildIcon}
				/>
				<ArticleCard
					title="Interact"
					description="Integrate smart contract interactions directly into your app"
					icon={ContractInteractIcon}
					href="/contracts/interact"
				/>
				<ArticleCard
					title="Explore"
					description="Ready-to-deploy contracts"
					href="/contracts/example"
					icon={ContractExploreIcon}
				/>
				<ArticleCard
					href="/contracts/publish"
					title="Publish"
					description="Publish your contracts on-chain"
					icon={ContractPublishIcon}
				/>
			</Grid>
		</section>
	);
}

function PaymentSection() {
	return (
		<section className="py-10">
			<SectionTitle id="payments" title="Payments" />

			<Grid>
				<ArticleCard
					href="/payments/checkout"
					title="NFT Checkout"
					description="Credit card checkout for NFTs"
					icon={PaymentsNFTCheckoutIcon}
				/>
			</Grid>
		</section>
	);
}

function InfraSection() {
	return (
		<section className="py-10">
			<SectionTitle id="infra" title="Infrastructure" />

			<Grid>
				<ArticleCard
					href="/infrastructure/storage"
					title="Storage"
					description="Secure, fast, decentralized storage"
					icon={InfraStorageIcon}
				/>
				<ArticleCard
					href="/infrastructure/rpc"
					title="RPC Edge"
					description="Enterprise-grade RPCs, for free"
					icon={InfraRPCIcon}
				/>
				<ArticleCard
					href="/infrastructure/engine"
					title="Engine"
					description="HTTP server with contract APIs and backend wallets"
					icon={InfraEngineIcon}
				/>
			</Grid>
		</section>
	);
}

function SDKSection() {
	return (
		<section className="py-10">
			<SectionTitle id="sdk" title="SDKs" />

			<Grid>
				<SDKCard href="/react" title="React" icon={ReactIcon} />
				<SDKCard href="/react-native" title="React Native" icon={ReactIcon} />
				<SDKCard href="/typescript" title="TypeScript" icon={TypeScriptIcon} />
				<SDKCard href="/python" title="Python" icon={PythonIcon} />
				<SDKCard href="/go" title="Go" icon={GoIcon} />
				<SDKCard href="/unity" title="Unity" icon={UnityIcon} />
				<SDKCard href="/solidity" title="Solidity" icon={SolidityIcon} />
			</Grid>
		</section>
	);
}

function ArticleCard(props: {
	title: string;
	description: string;
	href: string;
	icon?: React.FC<{ className?: string }>;
}) {
	return (
		<Link
			href={props.href}
			className="flex min-h-[120px] items-center gap-4 rounded-lg border bg-b-800 px-5 transition-colors hover:border-accent-500 hover:bg-accent-900"
		>
			{props.icon && <props.icon className="h-10 w-10 shrink-0" />}
			<div className="flex flex-col gap-1">
				<h3 className="text-lg font-semibold text-f-100">{props.title}</h3>
				<p className="text-f-300">{props.description}</p>
			</div>
		</Link>
	);
}

function SectionTitle(props: { title: string; id: string }) {
	return (
		<Heading id={props.id} level={2} anchorClassName="mb-5">
			{props.title}
		</Heading>
	);
}
