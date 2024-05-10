import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CodeBlock } from "../../../../../components/Document";

export function CodeTab(props: { payModalCode: string }) {
	return (
		<Tabs defaultValue="tab-1">
			<TabsList>
				<TabsTrigger value="tab-1"> useSendTransaction </TabsTrigger>
				<TabsTrigger value="tab-2"> TransactionButton </TabsTrigger>
			</TabsList>

			<TabsContent value="tab-1">
				<CodeBlock
					lang="tsx"
					code={`const sendTranaction = useSendTransaction({ payModal: ${props.payModalCode}})`}
				/>
			</TabsContent>

			<TabsContent value="tab-2">
				<CodeBlock
					lang="tsx"
					code={`<TransactionButton payModal={${props.payModalCode}} >Example</TransactionButton>`}
				/>
			</TabsContent>
		</Tabs>
	);
}
