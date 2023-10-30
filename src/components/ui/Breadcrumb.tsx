import { ChevronRight } from "lucide-react";
import Link from "next/link";

export type Crumb = {
	name: string;
	href: string;
};

export function Breadcrumb(props: { crumbs: Crumb[] }) {
	return (
		<div className="flex items-center gap-1 text-sm">
			{props.crumbs.map((crumb, i) => {
				return (
					<div key={crumb.name} className="flex items-center gap-1">
						<Link
							href={crumb.href}
							className="text-f-300 transition-colors hover:text-f-100"
						>
							{crumb.name}
						</Link>
						{i !== props.crumbs.length - 1 && (
							<span className="text-f-300 opacity-50">
								<ChevronRight size={16} />
							</span>
						)}
					</div>
				);
			})}
		</div>
	);
}
