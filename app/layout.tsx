import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/NavBar/Navbar";
import PolicyFooter from "./ui/Footer/PolicyFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoveredCA Performance Demo",
  description:
    "Demo to show potential performance improvements in CoveredCA.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />

        {children}

        <PolicyFooter />
      </body>
    </html>
  );
}
