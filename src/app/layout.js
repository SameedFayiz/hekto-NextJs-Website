import FooterComponent from "./components/footer";
import HeaderComponent from "./components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hekto",
  description: "A project of Sameed Fayiz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ minWidth: "250px" }} className={inter.className}>
        <HeaderComponent></HeaderComponent>
        {children}
        <FooterComponent></FooterComponent>
      </body>
    </html>
  );
}
