# thirdweb docs (v2)

## Contributing Guidelines

### Image

Do not render image with markdown syntax or `<img/>` tag.

Import `Image` component from `'next/image'` package to render Images and import the image via a static import and set the `src` prop

Put the Images as close to the page as possible, preferably in the same folder as the page. Avoid putting all the images in the root `public` folder.

```tsx
import fooImage from "./assets/foo.png";
import Image from "next/image";

<Image src={fooImage} alt="foo" />;
```
