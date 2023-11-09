import Link from "next/link";
import thirdwebLogo from "@public/icons/thirdweb-logo.svg";
import Image from "next/image";
import {
	BsTwitter,
	BsDiscord,
	BsYoutube,
	BsInstagram,
	BsGithub,
} from "react-icons/bs";
import { FaTiktok, FaLinkedinIn } from "react-icons/fa";

type LinkSection = {
	title: string;
	links: {
		label: string;
		href: string;
	}[];
};

export function Footer() {
	return (
		<footer className="mt-10 w-full border-t  py-10">
			<div className="container">
				<div className="grid grid-cols-2 gap-10 md:flex md:justify-between">
					<div className="h-full">
						<Image
							src={thirdwebLogo}
							alt=""
							height={24}
							className="ml-[-5px]"
						/>
						<div className="mt-7 flex flex-col gap-5">
							{socialLinks.map((link) => (
								<Link
									href={link.href}
									aria-label={link.label}
									key={link.label}
									target="_blank"
									className="flex items-center gap-4 text-base text-f-300 hover:text-f-100"
								>
									<link.icon className="h-5 w-5" />
									{link.label}
								</Link>
							))}
						</div>
					</div>
					<FooterLinkSection
						title={productSection.title}
						links={productSection.links}
					/>

					<div className="flex flex-col gap-10">
						<FooterLinkSection
							title={developerSection.title}
							links={developerSection.links}
						/>
						<FooterLinkSection
							title={networksSection.title}
							links={networksSection.links}
						/>
					</div>
					<div className="flex flex-col gap-10">
						<FooterLinkSection
							title={sdkSection.title}
							links={sdkSection.links}
						/>
						<FooterLinkSection
							title={solutionSection.title}
							links={solutionSection.links}
						/>
					</div>
					<div className="flex flex-col gap-10">
						<FooterLinkSection
							title={communitySection.title}
							links={communitySection.links}
						/>
						<FooterLinkSection
							title={companySection.title}
							links={companySection.links}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}

function FooterLinkSection(props: LinkSection) {
	return (
		<div>
			<h5 className="mb-5 text-base font-semibold"> {props.title}</h5>
			<div className="flex flex-col gap-3">
				{props.links.map((link) => {
					return (
						<Link
							href={link.href}
							className="text-base text-f-300 hover:text-f-100"
							key={link.href}
							target={link.href.startsWith("http") ? "_blank" : undefined}
						>
							{link.label}
						</Link>
					);
				})}
			</div>
		</div>
	);
}

const productSection: LinkSection = {
	title: "Products",
	links: [
		{
			label: "Deploy",
			href: "https://thirdweb.com/deploy",
		},
		{
			label: "Build",
			href: "https://thirdweb.com/build",
		},
		{
			label: "Interact",
			href: "https://thirdweb.com/interact",
		},
		{
			label: "Explore",
			href: "https://thirdweb.com/smart-contracts",
		},
		{
			label: "Publish",
			href: "https://thirdweb.com/publish",
		},
		{
			label: "Connect",
			href: "https://thirdweb.com/connect",
		},
		{
			label: "Smart Wallet",
			href: "https://thirdweb.com/account-abstraction",
		},
		{
			label: "Embedded Wallets",
			href: "https://thirdweb.com/embedded-wallets",
		},
		{
			label: "Auth",
			href: "https://thirdweb.com/auth",
		},
		{
			label: "Storage",
			href: "https://thirdweb.com/storage",
		},
		{
			label: "RPC Edge",
			href: "https://thirdweb.com/rpc-edge",
		},
		{
			label: "NFT Checkout",
			href: "https://thirdweb.com/checkout",
		},
		{
			label: "Sponsored Transactions",
			href: "https://thirdweb.com/sponsored-transactions",
		},
		{
			label: "Engine",
			href: "https://thirdweb.com/engine",
		},
	],
};

const developerSection: LinkSection = {
	title: "Developer",
	links: [
		{
			label: "Docs",
			href: "/",
		},
		{
			label: "Templates",
			href: "https://thirdweb.com/templates",
		},
		{
			label: "Guides",
			href: "https://blog.thirdweb.com/guides",
		},
		{
			label: "Open Source",
			href: "https://thirdweb.com/open-source",
		},
		{
			label: "SDKs",
			href: "https://thirdweb.com/sdk",
		},
		{
			label: "Dashboard",
			href: "https://thirdweb.com/dashboards",
		},
		{
			label: "UI Components",
			href: "https://thirdweb.com/ui-components",
		},
		{
			label: "CLI",
			href: "/cli",
		},
		{
			label: "Wallet SDK",
			href: "/wallet",
		},
	],
};

const sdkSection: LinkSection = {
	title: "SDKs",
	links: [
		{
			label: "JavaScript",
			href: "/typescript",
		},
		{
			label: "React",
			href: "/react",
		},
		{
			label: "Python",
			href: "/python",
		},
		{
			label: "Contracts",
			href: "/solidity",
		},
	],
};

const solutionSection: LinkSection = {
	title: "Solutions",
	links: [
		{
			label: "Gaming",
			href: "https://thirdweb.com/solutions/gaming",
		},
		{
			label: "Minting",
			href: "https://thirdweb.com/solutions/minting",
		},
		{
			label: "Loyalty",
			href: "https://thirdweb.com/solutions/loyalty",
		},
		{
			label: "Marketplace",
			href: "https://thirdweb.com/solutions/marketplace",
		},
		{
			label: "Chains",
			href: "https://thirdweb.com/solutions/chains",
		},
		{
			label: "Appchain API",
			href: "https://thirdweb.com/solutions/appchain-api",
		},
		{
			label: "Web2 Onboarding",
			href: "https://thirdweb.com/solutions/web2-onboarding",
		},
	],
};

const networksSection: LinkSection = {
	title: "Networks",
	links: [
		{
			label: "Chainlist",
			href: "https://thirdweb.com/chains",
		},
	],
};

const communitySection: LinkSection = {
	title: "Community",
	links: [
		{
			label: "Events",
			href: "https://thirdweb.com/events",
		},
		{
			label: "Ambassadors",
			href: "https://thirdweb.com/ambassadors",
		},
		{
			label: "thirdweb learn",
			href: "https://thirdweb.com/learn",
		},
		{
			label: "Report Abuse",
			href: "https://thirdweb.com/abuse",
		},
	],
};

const companySection: LinkSection = {
	title: "Company",
	links: [
		{
			label: "About us",
			href: "https://thirdweb.com/about",
		},
		{
			label: "Blog",
			href: "https://blog.thirdweb.com/",
		},
		{
			label: "Pricing",
			href: "https://thirdweb.com/pricing",
		},
		{
			label: "Careers",
			href: "https://careers.thirdweb.com/",
		},
		{
			label: "Press Kit",
			href: "https://ipfs.io/ipfs/QmTWMy6Dw1PDyMxHxNcmDmPE8zqFCQMfD6m2feHVY89zgu/",
		},
		{
			label: "Privacy Policy",
			href: "https://thirdweb.com/privacy",
		},
		{
			label: "Terms of Service",
			href: "https://thirdweb.com/tos",
		},
	],
};

const socialLinks: {
	label: string;
	href: string;
	icon: typeof BsTwitter;
}[] = [
	{
		label: "Twitter",
		href: "https://twitter.com/thirdweb",
		icon: BsTwitter,
	},
	{
		label: "Discord",
		href: "https://discord.gg/thirdweb",
		icon: BsDiscord,
	},
	{
		label: "YouTube",
		href: "https://www.youtube.com/channel/UCdzMx7Zhy5va5End1-XJFbA",
		icon: BsYoutube,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/company/third-web/",
		icon: FaLinkedinIn,
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/thirdweb/",
		icon: BsInstagram,
	},
	{
		label: "TikTok",
		href: "https://www.tiktok.com/@thirdweb",
		icon: FaTiktok,
	},
	{
		label: "GitHub",
		href: "https://github.com/thirdweb-dev",
		icon: BsGithub,
	},
];
