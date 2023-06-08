import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import LoginModal from "../components/LoginModal/LoginModal";
import RegisterModal from "../components/registerModal/RegisterModal";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "../lib/providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Showcase",
    default: "Showcase",
  },
  description: "Showcase by rust",
  generator: "Next.js",
  applicationName: "Showcase",
  referrer: "origin-when-cross-origin",
  keywords: ["Showcase", "符画虎", "E-Commerce"],
  authors: [{ name: "符画虎", url: "https://github.com/newman-afk" }],
  colorScheme: "dark",
  creator: "符画虎",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  themeColor: "dark",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" scroll-smooth bg-slate-50 dark:bg-gray-900">
      <body className={inter.className}>
        <Providers>
          <Toaster />
          <LoginModal />
          <RegisterModal />
          <Navbar />
          {children}
          <Footer />
          <ReactQueryDevtools />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
