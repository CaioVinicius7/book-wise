import Head from "next/head";

import { DefaultLayout } from "@/components/DefaultLayout";

import { BooksContainer, HomeContainer } from "./styles";

import { PopularBooksSidebar } from "./components/PopularBooksSidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Wise | Home</title>
      </Head>

      <DefaultLayout variant="home">
        <HomeContainer>
          <BooksContainer>
            <h2>Avaliações mais recentes</h2>
          </BooksContainer>

          <PopularBooksSidebar />
        </HomeContainer>
      </DefaultLayout>
    </>
  );
}
