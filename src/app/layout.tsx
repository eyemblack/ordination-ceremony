import type { Metadata } from "next";
import { Newsreader, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const notoSansThai = Noto_Sans_Thai({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${newsreader.variable} ${notoSansThai.variable} antialiased bg-background-light text-[#181511] bg-thai-pattern font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
