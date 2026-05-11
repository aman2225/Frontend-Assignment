import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#181B22",
        muted: "#596176",
        paper: "#FFFDF8",
        porcelain: "#F4F6F8",
        ember: "#FF6D33",
        emberDark: "#E35622",
        sage: "#2F7D5B",
        sea: "#256C8A",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(24, 27, 34, 0.10)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
