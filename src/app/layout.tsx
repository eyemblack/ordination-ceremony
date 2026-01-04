import type { Metadata } from "next";
import { Newsreader, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  variable: "--font-noto-sans-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "งานอุปสมบท",
  description: "ขอเรียนเชิญร่วมงานอุปสมบท วันเสาร์ที่ 17 มกราคม 2569 ณ วัดบางโฉลงใน",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="light">
      <body
        className={`${newsreader.variable} ${notoSansThai.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
