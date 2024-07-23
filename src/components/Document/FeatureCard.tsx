import Image from "next/image";

export type FeatureCardItem = {
	title: string;
	description: string;
	iconUrl: string;
};

export function FeatureCard(props: FeatureCardItem) {
	const { title, description, iconUrl } = props;
	return (
		<div className="flex flex-row gap-4 rounded-lg px-4 py-3">
			<div>
				<Image src={iconUrl} alt="" width={40} height={40} />
			</div>
			<div>
				<div className="text-lg font-semibold">{title}</div>
				<div className="max-w-[300px] text-sm">{description}</div>
			</div>
		</div>
	);
}
