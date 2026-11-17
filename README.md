# Metascience Observatory design

The shared look of the Metascience Observatory websites: colour tokens, a Tailwind 3 preset and
the components every site uses. The values come from the main site
(`metascience-observatory-website`), which was the reference when this was extracted.

| Part | What it is |
|---|---|
| `tokens.css` | Colour, radius and shadow variables (HSL triplets), light and `.dark` |
| `tailwind-preset.cjs` | Maps the tokens to Tailwind names; container widths; `font-clarendon` |
| `content.cjs` | The glob of this package's files, for a Tailwind `content` list |
| `Navbar` | Globe, site title, pill buttons, mobile menu. Each site passes its own links. |
| `Footer` | Optional link columns, then the common band (social, copyright, sponsor, contact) |
| `Card`, `CardHeader`, `CardTitle`, `CardContent` | Bordered surface; `outlined` for findings lists |
| `Disclaimer` | The statement shown wherever findings about named papers are listed |
| `StatTile`, `SectionHeading`, `BackLink`, `GlobeLogo`, `cn` | Small shared pieces |

The package ships TypeScript source. There is no build step; the consuming Next.js app compiles it.

## Using it in a site

```bash
npm install github:The-Metascience-Observatory/metascience-observatory-design
```

`next.config`:

```js
transpilePackages: ["@metascience-observatory/design"],
```

`tailwind.config`:

```js
import preset from "@metascience-observatory/design/tailwind-preset";
import designContent from "@metascience-observatory/design/content";

export default {
  presets: [preset],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", designContent],
};
```

Root layout: import the tokens before the site's own CSS, and load Roboto Slab with the variable
the preset expects.

```tsx
import "@metascience-observatory/design/tokens.css";
import "./globals.css"; // @tailwind base; @tailwind components; @tailwind utilities;
import { Roboto_Slab } from "next/font/google";
import { Navbar, Footer } from "@metascience-observatory/design";

const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-roboto-slab" });
// <html className={robotoSlab.variable}> ... <Navbar title="..." links={[...]} /> ... <Footer />
```

## Changing the look

Change it here, not in a site. Then update the dependency in each site (`npm update
@metascience-observatory/design`) and commit its lockfile; that commit is what deploys the change.

- A site may add its own components, but not its own colours, fonts or card styles.
- Keep components free of site-specific text and links: pass those in as props.
- `npm run typecheck` before committing.
