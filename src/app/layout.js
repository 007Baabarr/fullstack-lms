import localFont from "next/font/local";
import "./globals.css";
import { motion } from "framer-motion";
import Transition from "@/components/TransitionProvider/TransitionProvider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}