import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "아스트로케미칼 | Astro Chemical - 화학물질 전문 유통기업",
  description:
    "아스트로케미칼은 페인트, 잉크, 플라스틱, 고무 산업용 화학원료를 공급하는 화학물질 전문 유통기업입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
