import Head from "next/head";
import { CaretRight } from "phosphor-react";

import { DefaultLayout } from "@/components/DefaultLayout";
import { Comment } from "@/components/CommentCard";
import { CustomLink } from "@/components/CustomLink";

import { TrendingBooksSidebar } from "./components/TrendingBooksSidebar";

import {
  BooksReviewContainer,
  BooksReviewSectionHeader,
  HomeContainer
} from "./styles";

export default function Home() {
  const comment =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quod quisquam consequuntur ex atque, laudantium reiciendis aliquid quos dolor, magni modi dicta provident illum cumque numquam voluptates quae, error dignissimos, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quod quisquam consequuntur ex atque, laudantium reiciendis aliquid quos dolor, magni modi dicta provident illum cumque numquam voluptates quae, error dignissimos, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quod quisquam consequuntur ex atque, laudantium reiciendis aliquid quos dolor, magni modi dicta provident illum cumque numquam voluptates quae, error dignissimos.";

  return (
    <>
      <Head>
        <title>Book Wise | Home</title>
      </Head>

      <DefaultLayout variant="home">
        <HomeContainer>
          <BooksReviewContainer>
            <section>
              <BooksReviewSectionHeader>
                <h2>Sua última leitura</h2>

                <CustomLink href="/profile">
                  Ver todos
                  <CaretRight size={16} weight="bold" />
                </CustomLink>
              </BooksReviewSectionHeader>

              <Comment.Root backgroundVariant="secondary">
                <Comment.ContentWithBookDetailsRatingAndDate
                  book={{
                    name: "Código limpo",
                    author: "Robert C. Martin",
                    coverImgUrl: "/codigo-limpo.png"
                  }}
                  rating={5}
                  comment={comment}
                  commentedAt={new Date()}
                />
              </Comment.Root>
            </section>

            <section>
              <BooksReviewSectionHeader>
                <h2>Avaliações mais recentes</h2>
              </BooksReviewSectionHeader>

              {Array(1, 2, 3, 4, 5).map((_, i) => {
                return (
                  <Comment.Root key={i}>
                    <Comment.Header
                      userName="Caio Vinícius"
                      userAvatarImgUrl="https://github.com/caiovinicius7.png"
                      userRating={5}
                      commentedAt={new Date()}
                    />

                    <Comment.ContentWithBookDetails
                      book={{
                        name: "Código limpo",
                        author: "Robert C. Martin",
                        coverImgUrl: "/codigo-limpo.png"
                      }}
                      comment={comment}
                    />
                  </Comment.Root>
                );
              })}
            </section>
          </BooksReviewContainer>

          <TrendingBooksSidebar />
        </HomeContainer>
      </DefaultLayout>
    </>
  );
}
