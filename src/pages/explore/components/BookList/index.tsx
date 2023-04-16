import { BookSummaryCard } from "../BookSummaryCard";

import type { BookSummary } from "../../index.page";

import { BookListContainer } from "./styles";
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
        <BookSummaryCard
          key={book.title}
          title={book.title}
          author={book.author}
          rating={book.rating}
          coverImageUrl={book.coverImageUrl}
        />
      ))}
    </BookListContainer>
  );
}
