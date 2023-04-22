import { useState } from "react";
import Head from "next/head";

import { DefaultLayout } from "@/components/DefaultLayout";

import { Categories } from "./components/Categories";
import { BookList } from "./components/BookList";
import { BookReviewsSidebar } from "./components/BookReviewsSidebar";

import { ExploreContainer } from "./styles";

export interface BookSummary {
  title: string;
  author: string;
  rating: number;
  coverImageUrl: string;
}

const books: BookSummary[] = [
  {
    title: "Código Limpo",
    author: "Robert C. Martin",
    rating: 5,
    coverImageUrl: "/codigo-limpo.png"
  },
  {
    title: "Código Limpo",
    author: "Robert C. Martin",
    rating: 5,
    coverImageUrl: "/codigo-limpo.png"
  },
  {
    title: "Código Limpo",
    author: "Robert C. Martin",
    rating: 5,
    coverImageUrl: "/codigo-limpo.png"
  },
  {
    title: "Código Limpo",
    author: "Robert C. Martin",
    rating: 5,
    coverImageUrl: "/codigo-limpo.png"
  },
  {
    title: "Código Limpo",
    author: "Robert C. Martin",
    rating: 5,
    coverImageUrl: "/codigo-limpo.png"
  }
];

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState("Tudo");
  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  const sidebarShouldBeOpen = !!selectedBook;

  function deselectBook() {
    setSelectedBook(null);
  }

  return (
    <>
      <Head>
        <title>Book Wise | Explorar</title>
      </Head>

      <DefaultLayout variant="explore">
        <ExploreContainer>
          <Categories
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <BookList bookList={books} onSelectBook={setSelectedBook} />

          {sidebarShouldBeOpen && <BookReviewsSidebar onClose={deselectBook} />}
        </ExploreContainer>
      </DefaultLayout>
    </>
  );
}
