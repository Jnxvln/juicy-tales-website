import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import {NextUIProvider} from "@nextui-org/react";
import NextUIProviderContainer from "./components/NextUIProviderContainer/NextUIProviderContainer";
import { ToastContainer } from "react-toastify";
import { config } from '@fortawesome/fontawesome-svg-core';
import "@fortawesome/fontawesome-svg-core/styles.css";
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
      <body className={notoSans.className}>
        <NextUIProviderContainer>
          {children}
          <ToastContainer />
        </NextUIProviderContainer>
      </body>
    </html>
  );
}
