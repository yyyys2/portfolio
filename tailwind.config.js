import plugin from "tailwindcss/plugin"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: "var(--portfolio-bg)",
          surface: "var(--portfolio-surface)",
          strong: "var(--portfolio-surface-strong)",
          text: "var(--portfolio-text)",
          muted: "var(--portfolio-text-muted)",
          subtle: "var(--portfolio-text-subtle)",
          accent: "var(--portfolio-accent)",
          "accent-hover": "var(--portfolio-accent-hover)",
          "accent-soft": "var(--portfolio-accent-soft)",
          border: "var(--portfolio-border)",
        },
        primary: {
          DEFAULT: "var(--color-legacy-primary)",
          soft: "var(--color-legacy-primary-soft)",
          muted: "var(--color-legacy-primary-muted)",
          strong: "var(--color-legacy-primary-strong)",
        },

        accent: {
          DEFAULT: "var(--color-legacy-accent)",
          soft: "var(--color-legacy-accent-soft)",
        },

        secondary: {
          DEFAULT: "var(--color-legacy-secondary)",
          soft: "var(--color-legacy-secondary-soft)",
        },

        neutral: {
          50: "var(--color-legacy-neutral-50)",
          100: "var(--color-legacy-neutral-100)",
          200: "var(--color-legacy-neutral-200)",
          300: "var(--color-legacy-neutral-300)",
          400: "var(--color-legacy-neutral-400)",
          500: "var(--color-legacy-neutral-500)",
          600: "var(--color-legacy-neutral-600)",
          700: "var(--color-legacy-neutral-700)",
          800: "var(--color-legacy-neutral-800)",
          900: "var(--color-legacy-neutral-900)",
        },
      },

      boxShadow: {
        panel: "var(--portfolio-shadow)",
        raised: "var(--portfolio-shadow-raised)",
        soft: "0 10px 30px color-mix(in srgb, var(--color-legacy-gradient-pink) 15%, transparent)",
        card: "0 4px 20px color-mix(in srgb, var(--color-black) 6%, transparent)",
        glow: "0 0 40px color-mix(in srgb, var(--color-legacy-gradient-pink) 25%, transparent)",
      },

      borderRadius: {
        panel: "var(--radius-panel)",
        xl2: "1.25rem",
        xl3: "1.75rem",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },

      transitionTimingFunction: {
        soft: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      backgroundImage: {
        "soft-gradient":
          "linear-gradient(135deg, var(--color-legacy-gradient-pink) 0%, var(--color-legacy-secondary) 50%, var(--color-legacy-accent) 100%)",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".bg-soft-pastel": {
          background:
            "radial-gradient(1200px 700px at 15% 10%, color-mix(in srgb, var(--color-legacy-secondary) 26%, transparent), transparent 60%)," +
            "radial-gradient(1100px 600px at 85% 18%, color-mix(in srgb, var(--color-legacy-wash-pink) 24%, transparent), transparent 58%)," +
            "radial-gradient(900px 500px at 60% 95%, color-mix(in srgb, var(--color-legacy-wash-mint) 16%, transparent), transparent 55%)," +
            "var(--color-white)",
        },
      })
    }),
  ],
}
