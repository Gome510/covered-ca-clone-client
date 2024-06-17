import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../ui/NavBar/Navbar";
import PolicyFooter from "../ui/Footer/PolicyFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoveredCA Performance Demo",
  description:
    "Demo to show potential performance improvements in CoveredCA.com",
};

export default async function MainLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className}`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />

          {children}

          <PolicyFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
