import { DefaultLayout } from "@/components/DefaultLayout";
import Head from "next/head";

export default function Explore() {
  return (
    <>
      <Head>
        <title>Book Wise | Explorar</title>
      </Head>

      <DefaultLayout variant="explore">
        <h1>Explore</h1>
      </DefaultLayout>
    </>
  );
}
