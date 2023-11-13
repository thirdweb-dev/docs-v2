import { Playground } from "@/components/Document";

const code = `\
import {
  ThirdwebProvider,
  ThirdwebNftMedia,
  useContract,
  useNFT,
} from '@thirdweb-dev/react';

export default function Page() {
  return (
    <ThirdwebProvider
      activeChain="goerli"
      clientId="52882974caba144075e9773cf59bb11f" // demo client id
    >
      <Example />
    </ThirdwebProvider>
  );
}

function Example() {
  const { contract } = useContract(
    '0xb413df01580659F671471956e9D2fAe989d1dcd3'
  );
  const { data: nft, isLoading, error } = useNFT(contract, '0');

  if (isLoading) return <div>Loading...</div>;
  if (error || !nft) return <div>NFT not found</div>;

  return <ThirdwebNftMedia metadata={nft.metadata} />;
}

`;

export function ThirdwebNFTMediaPlayground() {
	return <Playground code={code} />;
}
