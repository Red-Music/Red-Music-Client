import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { PhoneLayout } from "@/components/common/PhoneLayout";
import Providers from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Player",
  description: "This is Red Music Player",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>
          <ThemeProvider>
            <PhoneLayout>{children}</PhoneLayout>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
