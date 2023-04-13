import { useState } from "react";
import Head from "next/head";

import { DefaultLayout } from "@/components/DefaultLayout";

import { Categories } from "./components/Categories";

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState("Tudo");

  return (
    <>
      <Head>
        <title>Book Wise | Explorar</title>
      </Head>

      <DefaultLayout variant="explore">
        <Categories
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </DefaultLayout>
    </>
  );
}
