import Image from "next/image";

export function DocImage(props: React.ComponentProps<typeof Image>) {
	const { alt, ...restProps } = props;
	return (
		<div className="my-6 rounded-lg border p-4">
			<Image alt={alt} {...restProps} />
		</div>
	);
}
