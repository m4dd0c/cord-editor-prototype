import type { Metadata } from "next";
import React from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-monserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Home | CordEditor",
  description:
    "A Prototype application for Real time file editing with in-built chatting system, providing each user or developer a private isolated environment enhancing the user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          montserrat.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
