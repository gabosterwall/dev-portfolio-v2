import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SpotlightContainer from "./components/SpotlightContainer";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriél Österwall",
  description: "Gabriél Österwall's personal website",
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
        <Footer />
      </body>
    </html>
  );
}
