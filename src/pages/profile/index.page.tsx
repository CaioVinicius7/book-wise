import Head from "next/head";

import { DefaultLayout } from "@/components/DefaultLayout";
import { SearchInput } from "@/components/SearchInput";

import { ProfileSummarySidebar } from "./components/ProfileSummarySidebar";
import { ReviewsPerMonth } from "./components/ReviewsPerMonth";

import { BooksReviewContainer, ProfileContainer } from "./styles";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Book Wise | Perfil</title>
      </Head>

      <DefaultLayout variant="profile">
        <ProfileContainer>
          <BooksReviewContainer>
            <SearchInput
              onSearch={() => {}}
              sizeVariant="body"
              placeholder="Buscar livro avaliado"
            />

            <ReviewsPerMonth />
          </BooksReviewContainer>

          <ProfileSummarySidebar />
        </ProfileContainer>
      </DefaultLayout>
    </>
  );
}
