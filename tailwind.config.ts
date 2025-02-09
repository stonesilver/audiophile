import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          main: "#D87D4A",
          light: "#fbaf85",
        },
        secondary: "#101010",
        "light-gray": "#F1F1F1",
        border: "#CFCFCF",
      },
      spacing: { 30: "1.875rem" },
      fontSize: {
        13: "0.8125rem",
        15: "0.9375rem",
      },
      backgroundImage: {
        headphone: "url('/images/headphone-large.webp')",
        "speaker-on-table": "url('/images/speaker-on-table.webp')",
        earbud: "url('/images/earbud.webp')",
        "listening-to-music": "url('/images/listening-to-music.webp')",
      },
      fontFamily: {
        Manrope: ["Manrope"],
      },
    },
  },
  plugins: [],
} satisfies Config;
