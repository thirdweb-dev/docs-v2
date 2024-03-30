import { getAllWalletsList, getWalletInfo, WalletId } from "thirdweb/wallets";
import Image from "next/image";
import { Table, Tr, Td, TBody, Th } from "../Document/Table";
import { InlineCode } from "../Document";

export async function AllSupportedWallets() {
	const wallets = await getAllWalletsList();

	return (
		<Table>
			<TBody>
				<Tr>
					<Th> Icon </Th>
					<Th> Name </Th>
					<Th> Wallet ID </Th>
				</Tr>

				{wallets.map((w) => {
					return (
						<Tr key={w.id}>
							<Td>
								<WalletImage id={w.id} />
							</Td>
							<Td>{w.name}</Td>
							<Td>
								<InlineCode code={`"${w.id}"`} />
							</Td>
						</Tr>
					);
				})}
			</TBody>
		</Table>
	);
}

async function WalletImage(props: { id: WalletId }) {
	const img = await getWalletInfo(props.id, true);
	return (
		<Image src={img} width={44} height={44} alt="" className="rounded-lg" />
	);
}
