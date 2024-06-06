export type FeatureCardItem = {
	title: string;
	description: string;
	iconUrl: string;
};

export function FeatureCard(props: FeatureCardItem) {
	const { title, description, iconUrl } = props;
	return (
		<div className="flex flex-row gap-4 rounded-lg border border-gray-400 py-3 px-4">
			<div>
				<img src={iconUrl} alt="" width={40} />
			</div>
			<div>
				<div className="font-semibold text-lg">{title}</div>
				<div className="text-sm max-w-[300px]">{description}</div>
			</div>
		</div>
	);
}
