import ActionButton from "@/components/ActionButton/ActionButton";
import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <ActionButton />
    </main>
  );
}
