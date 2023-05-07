import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
  coverImgUrl: string;
}

const books: BookSummary[] = [
  {
    title: "Código Limpo",
    author: "Robert C. Martin",
    rating: 5,
    coverImgUrl: "/codigo-limpo.png"
  },
  {
    title: "Código Limpo",
    author: "Robert C. Martin",
    rating: 5,
    coverImgUrl: "/codigo-limpo.png"
  },
  {
    title: "Código Limpo",
    author: "Robert C. Martin",
    rating: 5,
    coverImgUrl: "/codigo-limpo.png"
  },
  {
    title: "Código Limpo",
    author: "Robert C. Martin",
    rating: 5,
    coverImgUrl: "/codigo-limpo.png"
  },
  {
    title: "Código Limpo",
    author: "Robert C. Martin",
    rating: 5,
    coverImgUrl: "/codigo-limpo.png"
  }
];

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState("Tudo");
  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  const router = useRouter();

  const sidebarShouldBeOpen = !!selectedBook;

  function deselectBook() {
    setSelectedBook(null);
  }

  useEffect(() => {
    const queryParams = router.query;

    if (queryParams.book) {
      setSelectedBook(queryParams.book.toString());
    }
  }, [router]);

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

          <BookList bookList={books} setSelectedBook={setSelectedBook} />

          {sidebarShouldBeOpen && <BookReviewsSidebar onClose={deselectBook} />}
        </ExploreContainer>
      </DefaultLayout>
    </>
  );
}
