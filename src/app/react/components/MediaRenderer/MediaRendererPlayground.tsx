import { Playground } from "@/components/Document";

const code = `\
import { ThirdwebProvider, MediaRenderer } from '@thirdweb-dev/react';

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
    <MediaRenderer
      src="ipfs://QmV4HC9fNrPJQeYpbW55NLLuSBMyzE11zS1L4HmL6Lbk7X"
    />
  );
}
`;

export function MediaRendererPlayground() {
	return <Playground code={code} />;
}
