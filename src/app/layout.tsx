import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import { SectionProvider } from "@/components/sections/sectionContext";

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "weewooweewooo - Sean Lee",
  description: "Portfolio of Sean",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmMono.className} ${ibmMono.variable} antialiased`}>
        <SectionProvider>
          <Navbar />
          {children}
        </SectionProvider>
      </body>
    </html>
  );
}
