import Image from "next/image";
import DocsHero from "./_images/docs-hero.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DocLink, Heading } from "@/components/Document";
import {
	ChevronRight,
	CircleDollarSign,
	FileTextIcon,
	Gamepad2,
	LucideIcon,
	MousePointerSquare,
	ShoppingBag,
	User,
} from "lucide-react";

export default function Page() {
	return (
		<main className="container grow">
			<Hero />
			<TutorialsSection />
			<ContractsSection />
			<ApplicationSection />
			<InfraSection />
		</main>
	);
}

function Hero() {
	return (
		<section className="grid py-16 lg:grid-cols-2">
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
							<Link href="/">Learn</Link>
						</Button>
						<Button
							variant="outline"
							className="text-lg lg:min-w-[150px] lg:px-10"
							asChild
						>
							<Link href="/">Explore Products</Link>
						</Button>
					</div>
				</div>
			</div>

			{/* right */}
			<div className="hidden justify-center lg:flex">
				<Image src={DocsHero} alt="" height={350} />
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
							name: "Shopify Storefront",
							href: "/",
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
				<Heading level={3} id={props.title} anchorClassName="mb-0">
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

function ContractsSection() {
	return (
		<section className="py-10">
			<SectionTitle id="contracts" title="Contracts" />

			<Grid>
				<ArticleCard
					href="/"
					title="Lorem Ipsum"
					description="Some description lorem ipsum dolor"
				/>
				<ArticleCard
					href="/"
					title="Lorem Ipsum"
					description="Some description lorem ipsum dolor"
				/>
				<ArticleCard
					href="/"
					title="Lorem Ipsum"
					description="Some description lorem ipsum dolor"
				/>
				<ArticleCard
					href="/"
					title="Lorem Ipsum"
					description="Some description lorem ipsum dolor"
				/>
				<ArticleCard
					href="/"
					title="Lorem Ipsum"
					description="Some description lorem ipsum dolor"
				/>
				<ArticleCard
					href="/"
					title="Lorem Ipsum"
					description="Some description lorem ipsum dolor"
				/>
			</Grid>
		</section>
	);
}

function ApplicationSection() {
	return (
		<section className="py-10">
			<SectionTitle id="application" title="Application" />

			<Grid>
				<ArticleCard
					href="/"
					title="Lorem Ipsum"
					description="Some description lorem ipsum dolor"
				/>
				<ArticleCard
					href="/"
					title="Lorem Ipsum"
					description="Some description lorem ipsum dolor"
				/>
				<ArticleCard
					href="/"
					title="Lorem Ipsum"
					description="Some description lorem ipsum dolor"
				/>
				<ArticleCard
					href="/"
					title="Lorem Ipsum"
					description="Some description lorem ipsum dolor"
				/>
				<ArticleCard
					href="/"
					title="Lorem Ipsum"
					description="Some description lorem ipsum dolor"
				/>
				<ArticleCard
					href="/"
					title="Lorem Ipsum"
					description="Some description lorem ipsum dolor"
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
					href="/"
					title="Lorem Ipsum"
					description="Some description lorem ipsum dolor"
				/>
				<ArticleCard
					href="/"
					title="Lorem Ipsum"
					description="Some description lorem ipsum dolor"
				/>
				<ArticleCard
					href="/"
					title="Lorem Ipsum"
					description="Some description lorem ipsum dolor"
				/>
				<ArticleCard
					href="/"
					title="Lorem Ipsum"
					description="Some description lorem ipsum dolor"
				/>
				<ArticleCard
					href="/"
					title="Lorem Ipsum"
					description="Some description lorem ipsum dolor"
				/>
				<ArticleCard
					href="/"
					title="Lorem Ipsum"
					description="Some description lorem ipsum dolor"
				/>
			</Grid>
		</section>
	);
}

function ArticleCard(props: {
	title: string;
	description: string;
	href: string;
}) {
	return (
		<Link
			href={props.href}
			className="rounded-lg border p-5 transition-colors hover:border-accent-500 hover:bg-accent-900"
		>
			<article className="flex items-center gap-5">
				<FileTextIcon className="h-7 w-6 text-f-300" />
				<div>
					<h3 className="mb-2 text-base font-semibold text-f-100">
						{props.title}
					</h3>
					<p className="text-f-300">{props.description}</p>
				</div>
			</article>
		</Link>
	);
}

function Grid(props: { children: React.ReactNode }) {
	return (
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{props.children}
		</div>
	);
}

function SectionTitle(props: { title: string; id: string }) {
	return (
		<Heading id={props.id} level={2} anchorClassName="mb-5">
			{props.title}
		</Heading>
	);
}
