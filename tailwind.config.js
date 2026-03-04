import plugin from "tailwindcss/plugin"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F4B6CF",
          soft: "#FFE4F0",
          muted: "#FAD2E5",
          strong: "#E85C9E",
        },

        accent: {
          DEFAULT: "#7FE0C3",
          soft: "#E6FFF7",
        },

        secondary: {
          DEFAULT: "#B8C0FF",
          soft: "#EEF0FF",
        },

        neutral: {
          50: "#FAFAFC",
          100: "#F4F5F8",
          200: "#E6E8F0",
          300: "#C9CCDB",
          400: "#9EA3B5",
          500: "#6B6F82",
          600: "#4B4F63",
          700: "#33364A",
          800: "#1F2235",
          900: "#141624",
        },
      },

      boxShadow: {
        soft: "0 10px 30px rgba(255, 126, 182, 0.15)",
        card: "0 4px 20px rgba(0, 0, 0, 0.06)",
        glow: "0 0 40px rgba(255, 126, 182, 0.25)",
      },

      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },

      fontFamily: {
        sans: ["Pretendard", "system-ui", "sans-serif"],
        display: ["Outfit", "Pretendard", "sans-serif"],
      },

      transitionTimingFunction: {
        soft: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      backgroundImage: {
        "soft-gradient":
          "linear-gradient(135deg, #FF7EB6 0%, #B8C0FF 50%, #7FE0C3 100%)",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".bg-soft-pastel": {
          background:
            "radial-gradient(1200px 700px at 15% 10%, rgba(184, 192, 255, 0.26), transparent 60%)," +
            "radial-gradient(1100px 600px at 85% 18%, rgba(250, 218, 221, 0.24), transparent 58%)," +
            "radial-gradient(900px 500px at 60% 95%, rgba(197, 255, 235, 0.16), transparent 55%)," +
            "#fff",
        },
      })
    }),
  ],
}
