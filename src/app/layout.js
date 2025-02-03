 // Ensure it's a Client Component

import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./components/themeProvider"; // Import ThemeProvider
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "matius app",
  description: "Built with Next.js and Geist fonts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <ThemeProvider> 
          {children} 
        </ThemeProvider>
      </body>
    </html>
  );
}
