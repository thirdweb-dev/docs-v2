/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";

const getBaseUrl = () => {
	const vercelUrl =
		process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL;

	// if on vercel, use the vercel url
	if (vercelUrl) {
		return `https://${vercelUrl}`;
	}

	return `http://localhost:3000`;
};

const width = 1200;
const height = 630;

const iconSize = 300;

// Image generation
export async function openGraphImg(options: {
	title: string;
	icon:
		| "react"
		| "typescript"
		| "unity"
		| "solidity"
		| "wallets"
		| "auth"
		| "contract"
		| "payment"
		| "infra"
		| "rpc"
		| "storage";
}) {
	// Font
	const inter600 = await fetch(
		new URL("./inter/700.ttf", import.meta.url),
	).then((res) => res.arrayBuffer());

	const iconUrl = `${getBaseUrl()}/og/icons/${options.icon || ""}.svg`;

	return new ImageResponse(
		(
			// ImageResponse JSX element
			<div
				style={{
					background: "black",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
				}}
			>
				<img
					src={`${getBaseUrl()}/og/background-1.png`}
					alt=""
					width={width}
					height={height}
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
					}}
				/>

				{/* Left */}
				<div
					style={{
						color: "white",
						width: "50%",
						padding: "80px 60px",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<div
						style={{
							display: "flex",
							gap: "10px",
							alignItems: "center",
							marginBottom: "40px",
						}}
					>
						<img
							src={`${getBaseUrl()}/icons/thirdweb-logo.svg`}
							alt=""
							width={300 / 1.7}
							height={50 / 1.7}
							style={{
								display: "flex",
							}}
						/>

						<div
							style={{
								fontSize: "26px",
								fontFamily: "Inter",
								fontWeight: 600,
								color: "white",
								marginTop: "2px",
							}}
						>
							Docs
						</div>
					</div>

					<div
						style={{
							fontSize: "60px",
							fontFamily: "Inter",
							fontWeight: 600,
							display: "flex",
							marginBottom: "40px",
						}}
					>
						{options.title}
					</div>

					<div
						style={{
							display: "flex",
						}}
					>
						<div
							style={{
								background: "white",
								padding: "14px 20px",
								fontSize: "24px",
								color: "black",
								fontFamily: "Inter",
								fontWeight: 600,
								borderRadius: "10px",
							}}
						>
							Read More
						</div>
					</div>
				</div>

				<img
					src={iconUrl}
					alt=""
					width={iconSize}
					height={iconSize}
					style={{
						display: "flex",
						position: "absolute",
						right: width / 6.7,
						top: height / 2 - iconSize / 2 + 10,
					}}
				/>
			</div>
		),
		// ImageResponse options
		{
			width: width,
			height: height,
			fonts: [
				{
					name: "Inter",
					data: inter600,
					style: "normal",
					weight: 600,
				},
			],
		},
	);
}
