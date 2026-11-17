/**
 * Tailwind 3 preset for the Metascience Observatory sites. Maps the tokens in tokens.css to
 * Tailwind names. Use it with `presets: [preset]`, and add the package's files to `content`
 * (see content.cjs) so the classes its components use are generated.
 */
const hsl = (name) => `hsl(var(--${name}))`;
const pair = (name) => ({ DEFAULT: hsl(name), foreground: hsl(`${name}-foreground`) });

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "3rem",
      screens: { xl: "960px", "2xl": "1040px" },
    },
    extend: {
      fontFamily: {
        // Load Roboto Slab in the app (next/font with variable --font-roboto-slab, or a <link>).
        clarendon: ["var(--font-roboto-slab)", "Roboto Slab", "serif"],
      },
      colors: {
        border: hsl("border"),
        input: hsl("input"),
        ring: hsl("ring"),
        background: hsl("background"),
        foreground: hsl("foreground"),
        "foreground-strong": hsl("foreground-strong"),
        primary: pair("primary"),
        secondary: pair("secondary"),
        destructive: pair("destructive"),
        muted: pair("muted"),
        accent: pair("accent"),
        popover: pair("popover"),
        card: pair("card"),
      },
      borderColor: { DEFAULT: hsl("border") },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};
