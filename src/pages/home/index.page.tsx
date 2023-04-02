import Head from "next/head";

import { DefaultLayout } from "@/components/DefaultLayout";
import { BookReviewCard } from "@/components/BookReviewCard";

import { PopularBooksSidebar } from "./components/PopularBooksSidebar";

import { BooksReviewContainer, HomeContainer } from "./styles";

export default function Home() {
  const bookReview =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quod quisquam consequuntur ex atque, laudantium reiciendis aliquid quos dolor, magni modi dicta provident illum cumque numquam voluptates quae, error dignissimos, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quod quisquam consequuntur ex atque, laudantium reiciendis aliquid quos dolor, magni modi dicta provident illum cumque numquam voluptates quae, error dignissimos, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quod quisquam consequuntur ex atque, laudantium reiciendis aliquid quos dolor, magni modi dicta provident illum cumque numquam voluptates quae, error dignissimos.";
  const shortBookReview =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

  return (
    <>
      <Head>
        <title>Book Wise | Home</title>
      </Head>

      <DefaultLayout variant="home">
        <HomeContainer>
          <BooksReviewContainer>
            <section>
              <header>
                <h2>Avaliações mais recentes</h2>
              </header>

              <BookReviewCard
                avatarImageUrl="https://github.com/caiovinicius7.png"
                userName="Caio Vinícius"
                reviewedAt={new Date()}
                bookCoverImageUrl={`/o-hobbit.png`}
                bookName="O Hobbit"
                bookAuthor="J.R.R. Tolkien"
                rating={4}
                review={bookReview}
              />

              <BookReviewCard
                avatarImageUrl="https://github.com/caiovinicius7.png"
                userName="Caio Vinícius"
                reviewedAt={new Date()}
                bookCoverImageUrl={`/codigo-limpo.png`}
                bookName="Código limpo"
                bookAuthor="Robert C. Martin"
                rating={5}
                review={shortBookReview}
              />

              <BookReviewCard
                avatarImageUrl="https://github.com/caiovinicius7.png"
                userName="Caio Vinícius"
                reviewedAt={new Date()}
                bookCoverImageUrl={`/o-hobbit.png`}
                bookName="O Hobbit"
                bookAuthor="J.R.R. Tolkien"
                rating={4}
                review={bookReview}
              />

              <BookReviewCard
                avatarImageUrl="https://github.com/caiovinicius7.png"
                userName="Caio Vinícius"
                reviewedAt={new Date()}
                bookCoverImageUrl={`/codigo-limpo.png`}
                bookName="Código limpo"
                bookAuthor="Robert C. Martin"
                rating={5}
                review={shortBookReview}
              />
            </section>
          </BooksReviewContainer>

          <PopularBooksSidebar />
        </HomeContainer>
      </DefaultLayout>
    </>
  );
}
