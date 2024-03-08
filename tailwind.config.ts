import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {},
      boxShadow: {
        logoBoxShadow: "0px 4px 4px 0px rgba(29, 173, 190, 0.16)",
      },
      colors: {
        /* Colors */
        /* cyan */
        primary50: "#ECFEFF",
        primary100: "#D5FCFF",
        primary200: "#B1F9FF",
        primary300: "#8BECF2",
        primary400: "#53DBEC",
        primary500: "#3BC9DB",
        primary600: "#1DADBE",
        primary700: "#1898A7",
        primary800: "#13808D",
        primary900: "#0F6772",
        /* orange */
        secondary50: "#FFF7ED",
        secondary100: "#FFEDD5",
        secondary200: "#FED7AA",
        secondary300: "#FDBA74",
        secondary400: "#FB923C",
        secondary500: "#F97316",
        secondary600: "#EA580C",
        secondary700: "#EA580C",
        secondary800: "#9A3412",
        secondary900: "#7C2D12",
        /* gray */
        gray50: "##F9FAFB",
        gray100: "#F3F4F6",
        gray200: "#E5E7EB",
        gray300: "#D2D5DA",
        gray400: "#9CA3AF",
        gray500: "#6D7280",
        gray600: "#4B5563",
        gray700: "#374151",
        gray800: "#1F2937",
        gray900: "#111827",
        /** error */
        error: "#E14646",
        errorText: "#C20C0C",
        /* Button Status Color  */
        ctaActive: "#F97316",
        ctaHover: "#FB923C",
        ctaPushed: "#C2410C",
        ctaInactive: "#D2D5DA",
        btnActive: "#3BC9DB",
        btnHover: "#53DBEC",
        btnPushed: "#1898A7",
        btnInactive: "#D2D5DA",
        outlineActive: "#3BC9DB",
        outlineHover: "#53DBEC",
        outlinePushed: "#1898A7",
        outlineInactive: "#9CA3AF",
        /* Select Status Color  */
        selectPushed: "#4B5563",
        selectHover: "#9CA3AF",
        selectNormal: "#E5E7EB",
        /* Text Status Color  */
        textTitle: "#111827",
        textActive: "#4B5563",
        textInactive: "#9CA3AF",
        textError: "#E93434",
        onColor: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
