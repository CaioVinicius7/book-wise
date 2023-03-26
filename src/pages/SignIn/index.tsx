import Head from "next/head";
import Image from "next/image";

import { SignInButton } from "@/components/SIgnInButton";

import {
  SignInBox,
  SignInContainer,
  SignInHero,
  SignInOptions
} from "./styles";

import logo from "../../assets/logo.svg";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Book Wise</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <SignInContainer>
        <SignInHero>
          <Image src={logo} alt="" />
        </SignInHero>

        <main>
          <SignInBox>
            <div>
              <h1>Boas Vindas!</h1>
              <span>Faça seu login ou acesse como visitante.</span>
            </div>

            <SignInOptions>
              <SignInButton variant="google" />
              <SignInButton variant="github" />
              <SignInButton variant="visitor" />
            </SignInOptions>
          </SignInBox>
        </main>
      </SignInContainer>
    </>
  );
}
