import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className}`}>
      <Head>
        <title>Halcyon</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
