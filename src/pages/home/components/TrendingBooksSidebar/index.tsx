import Link from "next/link";
import { CaretRight } from "phosphor-react";

import { CustomLink } from "@/components/CustomLink";

import { TrendingBookCard } from "../TrendingBookCard";

import { TrendingBookList, TrendingBooksSidebarContainer } from "./styles";

const TrendingBooks = [
  {
    title: "A revolução dos bichos",
    author: "George Orwell",
    rating: 4,
    CoverImgUrl: "/Book.png"
  },
  {
    title: "14 Hábitos de Desenvolvedores Altamente produtivos",
    author: "Zeno Rocha",
    rating: 4,
    CoverImgUrl: "/14-habitos-de-desenvolvedores-altamente-produtivos.png"
  },
  {
    title: "O Fim da Eternidade",
    author: "Isaac Asimov",
    rating: 4,
    CoverImgUrl: "/o-fim-da-eternidade.png"
  },
  {
    title: "Entendendo Algoritmos",
    author: "Aditya Bhargava",
    rating: 4,
    CoverImgUrl: "/entendendo-algoritmos.png"
  }
];

export function TrendingBooksSidebar() {
  return (
    <TrendingBooksSidebarContainer>
      <header>
        <h2>Livros populares</h2>

        <CustomLink href="/explore">
          Ver todos
          <CaretRight size={16} weight="bold" />
        </CustomLink>
      </header>

      <TrendingBookList>
        {TrendingBooks.map((book, i) => (
          <li key={i}>
            <Link href={`/explore?book=${book.title}`}>
              <TrendingBookCard
                title={book.title}
                author={book.author}
                rating={book.rating}
                CoverImgUrl={book.CoverImgUrl}
              />
            </Link>
          </li>
        ))}
      </TrendingBookList>
    </TrendingBooksSidebarContainer>
  );
}
