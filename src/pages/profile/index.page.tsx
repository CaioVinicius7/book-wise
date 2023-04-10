import { DefaultLayout } from "@/components/DefaultLayout";
import Head from "next/head";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Book Wise | Perfil</title>
      </Head>

      <DefaultLayout variant="profile">
        <h1>Profile</h1>
      </DefaultLayout>
    </>
  );
}
