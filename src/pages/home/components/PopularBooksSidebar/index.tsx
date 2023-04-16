import Link from "next/link";
import { CaretRight } from "phosphor-react";
import { PopularBookCard } from "../PopularBookCard";

import { PopularBooksSidebarContainer } from "./styles";

export function PopularBooksSidebar() {
  return (
    <PopularBooksSidebarContainer>
      <header>
        <h2>Livros populares</h2>

        <Link href="/explore">
          Ver todos
          <CaretRight size={16} weight="bold" />
        </Link>
      </header>

      <ul>
        <li>
          <PopularBookCard
            title="A revolução dos bichos"
            author="George Orwell"
            rating={4}
            bookCoverImage="Book.png"
          />
        </li>

        <li>
          <PopularBookCard
            title="14 Hábitos de Desenvolvedores Altamente produtivos"
            author="Zeno Rocha"
            rating={4}
            bookCoverImage="14-habitos-de-desenvolvedores-altamente-produtivos.png"
          />
        </li>

        <li>
          <PopularBookCard
            title="O Fim da Eternidade"
            author="Isaac Asimov"
            rating={4}
            bookCoverImage="o-fim-da-eternidade.png"
          />
        </li>

        <li>
          <PopularBookCard
            title="Entendendo Algoritmos"
            author="Aditya Bhargava"
            rating={4}
            bookCoverImage="entendendo-algoritmos.png"
          />
        </li>
      </ul>
    </PopularBooksSidebarContainer>
  );
}
