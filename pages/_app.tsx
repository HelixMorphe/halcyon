import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Inter, Poppins } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <div className={`${inter.className}`}>
        <Head>
          <title>fab resume.</title>
        </Head>
        <Component {...pageProps} />
      </div>
    </ClerkProvider>
  );
}
