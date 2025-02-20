import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SpotlightContainer from "./components/SpotlightContainer";

const inter = Inter();

export const metadata: Metadata = {
  title: "Gabriél Österwall",
  description: "Gabriél Österwall's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className="selection:bg-slate-200/20 selection:text-slate-200">
          <SpotlightContainer>{children}</SpotlightContainer>
        </main>
      </body>
    </html>
  );
}
