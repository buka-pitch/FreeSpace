import NavBar from "@/components/NavBar";
import Foote from "../components/Fotter";

import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NavBar />
        {children}
        <Foote />
      </body>
    </html>
  );
}
