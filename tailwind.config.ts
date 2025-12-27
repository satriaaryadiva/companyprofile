import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,jsx,js}",
    "./components/**/*.{ts,tsx,jsx,js}",
    "./pages/**/*.{ts,tsx,jsx,js}",
    "./src/**/*.{ts,tsx,jsx,js}",
    "./(id)/**/*.{ts,tsx,jsx,js}",
    "./(en)/**/*.{ts,tsx,jsx,js}",
  ],
 
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        
    sans: ["var(--font-montserrat)", "sans-serif"],
        
      },colors: {
        primary: "#1d4ed8",
        secondary: " #007f3d",
        
      },
      
    },
     
  },
  plugins: [],
};

export default config;
