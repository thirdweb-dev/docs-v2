/* eslint-disable @next/next/no-img-element */

export function Author(props: { name: string; profileImage?: string | null }) {
	return (
		<div className="flex items-center gap-2">
			{props.profileImage && (
				<img
					src={props.profileImage}
					className="h-8 w-8 rounded-[50%]"
					alt=""
				/>
			)}
			<span className="text-sm">{props.name}</span>
		</div>
	);
}
