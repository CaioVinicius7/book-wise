import Image from "next/image";

import { Button } from "./styles";

import googleIcon from "../../assets/google-icon.svg";
import githubIcon from "../../assets/github-icon.svg";
import visitorIcon from "../../assets/rocket-icon.svg";

type SignInProviders = "google" | "github" | "visitor";

interface SignInButtonProps {
  variant: SignInProviders;
  onClick: () => void;
}

interface SignInButtonOptions {
  text: string;
  icon: string;
}

const SignInProviderProps: Record<SignInProviders, SignInButtonOptions> = {
  google: {
    text: "Entrar com Google",
    icon: googleIcon
  },
  github: {
    text: "Entrar com GitHub",
    icon: githubIcon
  },
  visitor: {
    text: "Acessar como visitante",
    icon: visitorIcon
  }
};

export function SignInButton({ variant, onClick }: SignInButtonProps) {
  return (
    <Button onClick={onClick}>
      <Image src={SignInProviderProps[variant].icon} alt={`${variant} icon`} />

      {SignInProviderProps[variant].text}
    </Button>
  );
}
