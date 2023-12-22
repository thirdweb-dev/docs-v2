import Image from "next/image";

export function DocImage(props: React.ComponentProps<typeof Image>) {
	const { alt, ...restProps } = props;
	return (
		<div className="my-6 flex justify-center rounded-lg border p-4">
			<Image className="rounded-lg" alt={alt} {...restProps} />
		</div>
	);
}
