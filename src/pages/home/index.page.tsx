import Head from "next/head";

import { DefaultLayout } from "@/components/DefaultLayout";
import { Title } from "./styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Wise | Home</title>
      </Head>

      <DefaultLayout variant="home">
        <Title>Home</Title>
      </DefaultLayout>
    </>
  );
}
