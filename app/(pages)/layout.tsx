import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import LoginModal from "../components/Modals/LoginModal/LoginModal";
import RegisterModal from "../components/Modals/registerModal/RegisterModal";
import Navbar from "../components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "../utils/providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Showcase",
  description: "Showcase by Rust",
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
      </body>
    </html>
  );
}
