import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "../components/Navbar";
const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

import "./globals.css";

export const metadata: Metadata = {
  title: "PriceWatch",
  description: "Track product prices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-10x1 mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
