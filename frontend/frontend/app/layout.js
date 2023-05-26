import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "../components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FreeSpace",
  description: "Share your Opinon Freely",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
