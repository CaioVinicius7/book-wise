import { BookSummary } from "../BookSummaryCard";

import { BooksNotFound } from "../BooksNotFound";

import { BookListContainer } from "./styles";

interface BookSummary {
  title: string;
  author: string;
  rating: number;
  coverImgUrl: string;
}
interface BookListProps {
  bookList: BookSummary[];
  setSelectedBook(selectedBook: string): void;
}

export function BookList({ bookList, setSelectedBook }: BookListProps) {
  const bookListIsEmpty = bookList.length === 0;

  if (bookListIsEmpty) {
    return <BooksNotFound />;
  }

  return (
    <BookListContainer>
      {bookList.map((book) => {
        function onSelectBook() {
          setSelectedBook(book.title);
        }

        return (
          <BookSummary.Root key={book.title} onSelectBook={onSelectBook}>
            <BookSummary.Content
              title={book.title}
              author={book.author}
              rating={book.rating}
              coverImgUrl={book.coverImgUrl}
            />
          </BookSummary.Root>
        );
      })}
    </BookListContainer>
  );
}
