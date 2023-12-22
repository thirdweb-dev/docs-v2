"use client";

/* eslint-disable tailwindcss/no-custom-classname */
import React, { useEffect, useMemo, useRef } from "react";
import BlazeSlider, { BlazeConfig } from "blaze-slider";
import "blaze-slider/dist/blaze.css";
import "./Carousel.css";

function useBlazeSlider(config: BlazeConfig) {
	const initialized = useRef(false);
	const elRef = useRef<HTMLDivElement | null>(null);

	React.useEffect(() => {
		if (elRef.current) {
			// if not already initialized
			if (!initialized.current) {
				new BlazeSlider(elRef.current, config);
				initialized.current = true;
			}
		}
		const el = elRef.current;

		return () => {
			if (el) {
				el.innerHTML = "";
				initialized.current = false;
			}
		};
	}, [config]);

	return elRef;
}

export function Carousel(props: {
	children: React.ReactNode;
	slidesToShow: {
		lg: number;
		md: number;
		sm: number;
	};
}) {
	const { lg, md, sm } = props.slidesToShow;
	const variant = `${lg}-${md}-${sm}`;

	const config: BlazeConfig = useMemo(() => {
		return {
			all: {
				slidesToShow: lg,
				slidesToScroll: lg,
				loop: false,
				slideGap: "16px",
			},
			"(max-width: 900px)": {
				slidesToShow: md,
				slidesToScroll: md,
			},
			"(max-width: 600px)": {
				slidesToShow: sm,
				slidesToScroll: sm,
			},
		};
	}, [lg, md, sm]);

	const elRef = useBlazeSlider(config);

	useEffect(() => {
		if (elRef.current) {
			elRef.current.setAttribute("data-initialized", "");
		}
	}, [elRef]);

	return (
		<div className={"blaze-slider mt-4"} ref={elRef} data-variant={variant}>
			<div className="blaze-container">
				<div className="blaze-track-container">
					<div className="blaze-track">{props.children}</div>
				</div>

				<div
					className="flex items-center justify-center gap-4 pt-4"
					data-controls
				>
					<div className="blaze-pagination flex items-center justify-center gap-2 "></div>
				</div>
			</div>
		</div>
	);
}
