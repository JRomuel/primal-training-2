import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Anek_Tamil } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const anekTamil = Anek_Tamil({
  variable: "--font-anek-tamil",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Primal Gym | Train Hard. Live Better.",
  description:
    "Performance-driven gym community. Expert coaching, results-driven programs, and a supportive tribe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${anekTamil.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
