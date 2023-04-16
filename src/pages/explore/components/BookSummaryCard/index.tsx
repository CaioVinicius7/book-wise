import Image from "next/image";
import { Rating } from "react-simple-star-rating";

import type { BookSummary } from "../../index.page";

import { BookSummaryCardContainer, BookSummaryCardContent } from "./styles";

interface BookSummaryCardProps extends BookSummary {}

export function BookSummaryCard({
  title,
  author,
  rating,
  coverImageUrl
}: BookSummaryCardProps) {
  return (
    <BookSummaryCardContainer>
      <Image src={coverImageUrl} width={108} height={152} alt="Capa do livro" />

      <BookSummaryCardContent>
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
        </footer>
      </BookSummaryCardContent>
    </BookSummaryCardContainer>
  );
}
