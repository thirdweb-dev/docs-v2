import { Playground } from "@/components/Document";

const code = `\
import { ThirdwebProvider, Web3Button } from '@thirdweb-dev/react';

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
  return (
    <div className="p-10 flex justify-center h-full items-center">
      <Web3Button
        contractAddress="0xb413df01580659F671471956e9D2fAe989d1dcd3"
        action={async (contract) => {
          try {
            await contract.erc721.claim(1);
            alert('claimed!');
          } catch {
            alert('error claiming');
          }
        }}
        theme="dark"
      >
        Claim an NFT!
      </Web3Button>
    </div>
  );
}
`;

export function Web3ButtonPlayground() {
	return <Playground code={code} />;
}
