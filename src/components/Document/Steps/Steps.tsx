import { Heading } from "..";
import styles from "./Steps.module.css";

export function Steps(props: { children: React.ReactNode }) {
	return (
		<div className={`pl-4 ${styles.steps} relative`}>
			<ul className="flex flex-col gap-8 border-l-2 py-4 pl-8">
				{props.children}
			</ul>
		</div>
	);
}

export function Step(props: { title: string; children: React.ReactNode }) {
	return (
		<li>
			<div data-step>
				<Heading level={3} id={props.title}>
					{props.title}
				</Heading>
			</div>
			<div>{props.children}</div>
		</li>
	);
}
