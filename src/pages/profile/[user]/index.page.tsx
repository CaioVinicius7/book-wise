import Head from "next/head";
import { useRouter } from "next/router";

import { DefaultLayout } from "@/components/DefaultLayout";
import { SearchInput } from "@/components/SearchInput";

import { ReviewsPerMonth } from "../components/ReviewsPerMonth";
import { ProfileSummarySidebar } from "../components/ProfileSummarySidebar";

import { BooksReviewContainer, ProfileContainer } from "../styles";

export default function Profile() {
  const router = useRouter();

  const { user } = router.query;

  return (
    <>
      <Head>
        <title>Book Wise | {user}</title>
      </Head>

      <DefaultLayout variant="profile" returnable>
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
