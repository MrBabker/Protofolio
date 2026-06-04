import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Babiker | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, NestJS, ASP.NET Core, TypeScript, and modern web applications. Explore my projects, skills, and professional experience.",

  keywords: [
    "Mohammed Babiker",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "NestJS",
    "ASP.NET Core",
    "TypeScript",
    "JavaScript",
    "Portfolio",
    "Software Engineer",
  ],

  authors: [
    {
      name: "Mohammed Babiker",
    },
  ],

  creator: "Mohammed Babiker",

  //metadataBase: new URL("https://your-domain.com"),

  openGraph: {
    title: "Mohammed Babiker | Full Stack Developer",
    description:
      "Explore my portfolio, projects, skills, and experience as a Full Stack Developer.",
    url: "https://your-domain.com",
    siteName: "Mohammed Babiker Portfolio",
    images: [
      {
        url: "/GamePad.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Babiker Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    //card: "summary_large_image",
    title: "Mohammed Babiker | Full Stack Developer",
    description:
      "Full Stack Developer specializing in modern web technologies.",
    images: ["/GamePad.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
