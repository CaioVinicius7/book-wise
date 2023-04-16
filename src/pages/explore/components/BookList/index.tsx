import Image from "next/image";
import { Rating } from "react-simple-star-rating";

import {
  BookListContainer,
  BookSummaryCard,
  BookSummaryCardContent
} from "./styles";

interface BookSummary {
  title: string;
  author: string;
  rating: number;
  coverImageUrl: string;
}

interface BookListProps {
  bookList: BookSummary[];
}

export function BookList({ bookList }: BookListProps) {
  const bookListIsEmpty = bookList.length === 0;

  if (bookListIsEmpty) {
    return <h1>Nenhum livro encontrado!</h1>;
  }

  return (
    <BookListContainer>
      {bookList.map((book) => (
        <BookSummaryCard key={book.title}>
          <Image
            src={book.coverImageUrl}
            width={108}
            height={152}
            alt="Capa do livro"
          />

          <BookSummaryCardContent>
            <header>
              <strong>{book.title}</strong>
              <span>{book.author}</span>
            </header>

            <footer>
              <Rating
                size={20}
                fillColor="#8381D9"
                initialValue={book.rating}
                readonly
              />
            </footer>
          </BookSummaryCardContent>
        </BookSummaryCard>
      ))}
    </BookListContainer>
  );
}
