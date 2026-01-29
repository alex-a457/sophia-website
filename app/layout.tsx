import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";
import { siteConfig } from "@/config/site";

import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const switzer = localFont({
  src: [
    {
      path: "../public/fonts/switzer/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/switzer/Switzer-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/switzer/Switzer-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-switzer", // ✅ THIS WAS MISSING
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "min-h-screen text-black bg-white antialiased",
          switzer.variable,
          playfair.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html> 
  );
}


