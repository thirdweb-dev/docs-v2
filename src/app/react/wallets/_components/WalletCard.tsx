import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Heading } from "@/components/Document";

export type WalletInfo = { href: string; label: string; icon: StaticImport };

export function WalletCard(props: WalletInfo) {
	return (
		<Link href={props.href}>
			<div className="group/wallet-card rounded-[26px] border bg-b-800 px-5 py-2 transition-colors hover:border-accent-500 hover:bg-accent-900">
				<div className="mt-[-30px] flex flex-col justify-center gap-1">
					<Image
						src={props.icon}
						alt=""
						className="h-16 w-16 transition-transform duration-300 group-hover/wallet-card:scale-110 md:h-20 md:w-20"
					/>
					<Heading
						id={props.label}
						level={3}
						className="text-xl font-medium text-f-100 group-hover/wallet-card:text-f-100 md:text-lg"
					>
						{props.label}
					</Heading>
				</div>
			</div>
		</Link>
	);
}
