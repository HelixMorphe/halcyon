import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ClerkProvider {...pageProps}>
    <div className={`${inter.className}`}>
      <Head>
        <title>fab resume.</title>
      </Head>
      <Component {...pageProps} />
    </div>
    // </ClerkProvider>
  );
}
