import { BookSummaryCard } from "../BookSummaryCard";

import { BooksNotFound } from "../BooksNotFound";

import { BookListContainer } from "./styles";

import type { BookSummary } from "../../index.page";
interface BookListProps {
  bookList: BookSummary[];
  onSelectBook(selectedBook: string): void;
}

export function BookList({ bookList, onSelectBook }: BookListProps) {
  const bookListIsEmpty = bookList.length === 0;

  if (bookListIsEmpty) {
    return <BooksNotFound />;
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
          onSelectBook={onSelectBook}
        />
      ))}
    </BookListContainer>
  );
}
