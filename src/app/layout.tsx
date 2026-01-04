import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "พิธีอุปสมบท นายณัฐวุฒิ สุนทรโรจน์",
  description: "ขอเรียนเชิญร่วมงานอุปสมบท วันเสาร์ที่ 17 มกราคม 2569 ณ วัดบางโฉลงใน",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
