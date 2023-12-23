/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Image from "next/image";

export function DocImage(props: {
	src: React.ComponentProps<typeof Image>["src"];
	alt?: string;
	className?: string;
}) {
	const { alt, src } = props;
	const cls = cn("rounded-lg", props.className);

	return (
		<div className="my-6 flex justify-center rounded-lg border p-4">
			{typeof src === "string" ? (
				<img className={cls} alt={alt || ""} src={src} />
			) : (
				<Image className={cls} alt={alt || ""} src={src} />
			)}
		</div>
	);
}
