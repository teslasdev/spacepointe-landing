import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a4f6c",
        teal: "#18c6de",
        skywash: "#eaf4f8"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(10, 63, 93, 0.12)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 20% 18%, rgba(255,255,255,0.98), rgba(255,255,255,0.92) 36%, rgba(210,231,242,0.84) 62%, rgba(175,208,230,0.9) 100%)"
      }
    }
  },
  plugins: []
}

export default config
