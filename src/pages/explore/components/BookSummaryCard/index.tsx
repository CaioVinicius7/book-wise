import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { BookOpen, BookmarkSimple } from "phosphor-react";

import type { BookSummary } from "../../index.page";

import {
  BookSummaryCardContainer,
  BookSummaryCardContent,
  BookSummaryCardFooter
} from "./styles";

interface BookSummaryCardProps extends BookSummary {
  variant?: "list" | "sidebar";
  onSelectBook?(selectedBook: string): void;
}

export function BookSummaryCard({
  title,
  author,
  rating,
  coverImageUrl,
  variant = "list",
  onSelectBook
}: BookSummaryCardProps) {
  const isListVariant = variant === "list";

  const imgSize = {
    width: isListVariant ? 108 : 170,
    height: isListVariant ? 152 : 242
  };

  function handleSelectBook() {
    if (!onSelectBook) {
      return;
    }

    onSelectBook(title);
  }

  return (
    <BookSummaryCardContainer
      isListVariant={isListVariant}
      onClick={handleSelectBook}
    >
      <BookSummaryCardContent>
        <Image
          src={coverImageUrl}
          width={imgSize.width}
          height={imgSize.height}
          alt="Capa do livro"
        />

        <div>
          <header>
            <strong>{title}</strong>
            <span>{author}</span>
          </header>

          <footer>
            <Rating
              size={20}
              fillColor="#8381D9"
              initialValue={rating}
              readonly
            />
            {!isListVariant && <span>3 Avaliações</span>}
          </footer>
        </div>
      </BookSummaryCardContent>

      {!isListVariant && (
        <BookSummaryCardFooter>
          <div>
            <BookmarkSimple size={24} color="#50B2C0" />

            <div>
              <span>Categoria</span>
              <strong>Computação</strong>
            </div>
          </div>

          <div>
            <BookOpen size={24} color="#50B2C0" />

            <div>
              <span>Páginas</span>
              <strong>425</strong>
            </div>
          </div>
        </BookSummaryCardFooter>
      )}
    </BookSummaryCardContainer>
  );
}
