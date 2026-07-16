import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thangaraj | Electronics & Communication Engineer",
  description:
    "Portfolio of Thangaraj — Electronics and Communication Engineering student, Python developer, AutoCAD enthusiast, and problem solver.",
  keywords: [
    "Thangaraj",
    "portfolio",
    "electronics engineer",
    "ECE",
    "Python",
    "AutoCAD",
    "Next.js",
  ],
  openGraph: {
    title: "Thangaraj | Portfolio",
    description: "Electronics & Communication Engineering Student",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}
