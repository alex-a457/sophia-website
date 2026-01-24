const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sanspro: ["SourceSansPro", "sans-serif"], // Why Add sans-serif as a Fallback? If the browser cannot load the custom font it will fall back to a generic font like sans-serif.(Font Loading Issues)
      },
      boxShadow: {
        "custom-hover": "0px 0px 10px 0px var(--color-tertiary-shadow-theme)",
      },
      colors: {
        // Primary Colors (Most Used)
        "primary-text": "var(--color-primary-text)",
        "primary-text-muted": "var(--color-primary-text-muted)",
        "primary-text-light": "var(--color-primary-text-light)",
        "primary-bg": "var(--color-primary-bg)",
        "primary-bg-dark": "var(--color-primary-bg-dark)",
        "primary-bg-overlay": "var(--color-primary-bg-overlay)",
        "primary-border": "var(--color-primary-border)",
        "primary-border-light": "var(--color-primary-border-light)",
        "primary-border-muted": "var(--color-primary-border-muted)",
        "primary-border-dark": "var(--color-primary-border-dark)",
        
        // Secondary Colors (Less Used)
        "secondary-accent": "var(--color-secondary-accent)",
        "secondary-brand": "var(--color-secondary-brand)",
        "secondary-theme": "var(--color-secondary-theme)",
        "secondary-success": "var(--color-secondary-success)",
        "secondary-error": "var(--color-secondary-error)",
        "secondary-warning": "var(--color-secondary-warning)",
        "secondary-info": "var(--color-secondary-info)",
        "secondary-gray": "var(--color-secondary-gray)",
        "secondary-gray-light": "var(--color-secondary-gray-light)",
        "secondary-gray-dark": "var(--color-secondary-gray-dark)",
        "secondary-gray-border": "var(--color-secondary-gray-border)",
        
        // Tertiary Colors (Rarely Used)
        "tertiary-secondary": "var(--color-tertiary-secondary)",
        "tertiary-inactive": "var(--color-tertiary-inactive)",
        "tertiary-active": "var(--color-tertiary-active)",
        
        // Legacy Support (backward compatibility)
        background: "var(--color-primary-bg)",
        foreground: "var(--color-primary-text)",
        "theme-color": "var(--color-secondary-theme)",
        "active-font": "var(--color-tertiary-active)",
        "in-active-font": "var(--color-tertiary-inactive)",
        "secondary-color": "var(--color-tertiary-secondary)",
      },
      animation: {
        blink: "blink 1.2s infinite both",
      },
      keyframes: {
        blink: {
          "0%, 80%, 100%": { opacity: "0" },
          "40%": { opacity: "1" },
        },
      },
    },
    // screens: {
    //   "2xl": { max: "1535px" }, // ≤1535
    //   xl: { max: "1279px" },    // ≤1279
    //   lg: { max: "1023px" },    // ≤1023
    //   md: { max: "767px" },     // ≤767
    //   sm: { max: "639px" },     // ≤639
    //   xs: { max: "479px" },     // ≤479
    // },
  },
    borderRadius: {
    '4xl': '40px',
  },

  plugins: [heroui()],
  rules: {
    "tailwindcss/no-custom-classname": "off",
  },
};
