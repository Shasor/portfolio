import type { Metadata } from "next";
import { Geist, Saira_Stencil_One } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sairaStencilOne = Saira_Stencil_One({
  weight: "400",
  variable: "--font-caption",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Adam GONCALVES",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(geistSans.variable, sairaStencilOne.variable, "antialiased font-sans h-full bg-background text-foreground")}>{children}</body>
    </html>
  );
}
