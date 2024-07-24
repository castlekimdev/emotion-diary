import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppContext } from "./context/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "😊감정 일기장",
  description: "오늘의 감정을 기록해보아요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppContext>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AppContext>
  );
}
