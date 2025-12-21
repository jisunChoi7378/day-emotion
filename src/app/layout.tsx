import type { Metadata } from "next";
import { Noto_Serif_KR, Dongle } from "next/font/google";
import "./globals.css";

const noto = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-work",
});

const dongle = Dongle({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dongle",
});

export const metadata: Metadata = {
  title: "산타의 밀실탈출: Buried City",
  description: "수일배 작품들의 크리스마스 합작",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${noto.variable} ${dongle.variable}`}>
      <body>{children}</body>
    </html>
  );
}
