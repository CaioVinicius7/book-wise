import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { SignInButton } from "@/components/SIgnInButton";

import {
  SignInBox,
  SignInContainer,
  SignInHero,
  SignInOptions
} from "./styles";

import logo from "../../assets/logo.svg";

export default function SignIn() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Book Wise</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <SignInContainer>
        <SignInHero>
          <Image src={logo} alt="Logo Book Wise" />
        </SignInHero>

        <main>
          <SignInBox>
            <div>
              <h1>Boas Vindas!</h1>
              <span>Faça seu login ou acesse como visitante.</span>
            </div>

            <SignInOptions>
              <SignInButton variant="google" onClick={() => {}} />
              <SignInButton variant="github" onClick={() => {}} />
              <SignInButton
                variant="visitor"
                onClick={() => router.push("/home")}
              />
            </SignInOptions>
          </SignInBox>
        </main>
      </SignInContainer>
    </>
  );
}
