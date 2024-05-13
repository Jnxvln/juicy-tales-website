import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import "./globals.scss";

config.autoAddCss = false;

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juicy Tales",
  description: "Poems, prose, and stories by Juicy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
