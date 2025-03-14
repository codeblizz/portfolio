import type { Metadata, Viewport } from "next";
import Html from "@/components/ui/atoms/html";
import Body from "@/components/ui/atoms/body";
import Main from "@/components/ui/atoms/main";
import Header from "@/components/ui/atoms/header";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/ui/molecules/navbar";
import Footer from "@/components/ui/molecules/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  referrer: "origin",
  title: "Collins Maduka | Software Developer",
  applicationName: "Portfolio",
  description:
    "Portfolio of a software developer specializing in betting apps and mini app integrations.",
  authors: [{ url: "http://www.myprofile.com", name: "Collins Maduka" }],
  icons: {
    icon: "/portfolio.ico",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, height: "device-height" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Html>
      <Body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header className="">
          <Navbar />
        </Header>
        <Main className="">{children}</Main>
        <Footer />
      </Body>
    </Html>
  );
}
