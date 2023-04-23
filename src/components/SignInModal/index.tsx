import { X } from "phosphor-react";

import {
  SignInModalCloseButton,
  SignInModalContainer,
  SignInModalOverlay,
  SignInModalTitle,
  SingInModalPortal
} from "./styles";

import { SignInButton } from "../SIgnInButton";

export function SignInModal() {
  return (
    <SingInModalPortal>
      <SignInModalOverlay />

      <SignInModalContainer>
        <SignInModalCloseButton>
          <X size={20} color="#8D95AF" />
        </SignInModalCloseButton>

        <SignInModalTitle>
          Faça login para deixar sua avaliação
        </SignInModalTitle>

        <div>
          <SignInButton variant="google" onClick={() => {}} />
          <SignInButton variant="github" onClick={() => {}} />
        </div>
      </SignInModalContainer>
    </SingInModalPortal>
  );
}
