
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  darkMode: "class", // Enable dark mode based on class (e.g., adding 'dark' class to the <html> or <body> element)
  theme: {
    extend: {
      colors: {
        background: "var(--background, #1e293b)", // Custom background color
        foreground: "var(--foreground, #f1f5f9)", // Custom foreground color
        primary: "#6366f1", // Main accent color
        secondary: "#a855f7", // Secondary color for hover effects
        accent: "#4f52c9", // Accent color for buttons and links
        darkBackground: "#121212", // Dark mode background
        darkForeground: "#f3f4f6", // Dark mode foreground
        gradientStart: "#6366f1", // Gradient start color
        gradientEnd: "#a855f7", // Gradient end color
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'], // Custom font family
        serif: ['Georgia', 'Times', 'serif'],
      },
      boxShadow: {
        'btn': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)', // Custom shadow for buttons
        'card': '0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)', // Card shadow
        'highlight': '0 0 10px rgba(99, 102, 241, 0.5)', // Highlight shadow for elements
      },
      transitionDuration: {
        400: '400ms', // Custom transition duration
        700: '700ms',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        pulseGradient: 'pulseGradient 6s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Custom animation
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGradient: {
          '0%': { transform: 'scale(1)', opacity: '0.2' },
          '50%': { transform: 'scale(1.1)', opacity: '0.4' },
          '100%': { transform: 'scale(1)', opacity: '0.2' },
        },
      },
    },
  },
  plugins: [],
};
