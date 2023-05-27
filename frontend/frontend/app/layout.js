import "./globals.css";
import { Providers } from "./providers";
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
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
