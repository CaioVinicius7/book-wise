import { ReactNode } from "react";
import { Header } from "../Header";
import { Navbar } from "../Navbar";

import { ContentContainer, DefaultLayoutContainer } from "./styles";

interface DefaultLayoutProps {
  variant: "home" | "explore" | "profile";
  children: ReactNode;
}

export function DefaultLayout({ variant, children }: DefaultLayoutProps) {
  return (
    <DefaultLayoutContainer>
      <Navbar />

      <ContentContainer>
        <Header variant={variant} />

        {children}
      </ContentContainer>
    </DefaultLayoutContainer>
  );
}
