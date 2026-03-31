import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/home/components/Navbar";

// Load only Poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "NextPick",
  description: "A movie, game, series and book finder",
  icons: {
    icon: "/assets/logoIco.ico",
    shortcut: "/assets/logoIco.ico",
    apple: "/assets/logoIco.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-[#10172A]`}>
      <ClerkProvider>
        <Navbar />
        <Toaster 
            position="top-right" 
            reverseOrder={false} 
          />


        {children}
        </ClerkProvider>
      </body>
    </html>
  );
}