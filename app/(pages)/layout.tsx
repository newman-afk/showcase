import { Toaster } from "react-hot-toast";
import getCurrentUser from "../actions/getCurrentUser";
import Footer from "../components/Footer";
import LoginModal from "../components/Modals/LoginModal/LoginModal";
import RegisterModal from "../components/Modals/registerModal/RegisterModal";
import Navbar from "../components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

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
  const currentUser = await getCurrentUser();

  return (
    <html lang="en" className=" scroll-smooth">
      <body className={inter.className}>
        <Toaster />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
