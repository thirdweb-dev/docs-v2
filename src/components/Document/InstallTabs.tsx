import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { CodeBlock } from "./Code";

export function InstallTabs(props: {
	npm: string;
	yarn: string;
	pnpm: string;
	thirdwebInstallSupported?: boolean;
}) {
	return (
		<Tabs defaultValue={props.thirdwebInstallSupported ? "npx" : "npm"}>
			<TabsList>
				{props.thirdwebInstallSupported && (
					<TabsTrigger value="npx">npx</TabsTrigger>
				)}
				<TabsTrigger value="npm">npm</TabsTrigger>
				<TabsTrigger value="yarn">yarn</TabsTrigger>
				<TabsTrigger value="pnpm">pnpm</TabsTrigger>
			</TabsList>
			{props.thirdwebInstallSupported && (
				<TabsContent value="npx">
					<CodeBlock code={`npx thirdweb install`} lang="bash" />
				</TabsContent>
			)}
			<TabsContent value="npm">
				<CodeBlock code={props.npm} lang="bash" />
			</TabsContent>
			<TabsContent value="yarn">
				<CodeBlock code={props.yarn} lang="bash" />
			</TabsContent>
			<TabsContent value="pnpm">
				<CodeBlock code={props.pnpm} lang="bash" />
			</TabsContent>
		</Tabs>
	);
}
