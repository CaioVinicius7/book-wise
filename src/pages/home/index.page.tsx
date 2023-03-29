import Head from "next/head";

import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Wise | Home</title>
      </Head>

      <main>
        <Navbar />
      </main>
    </>
  );
}
