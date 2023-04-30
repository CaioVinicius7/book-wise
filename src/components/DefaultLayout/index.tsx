import { ReactNode } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

import { ContentContainer, DefaultLayoutContainer } from "./styles";

interface DefaultLayoutProps {
  variant: "home" | "explore" | "profile";
  children: ReactNode;
}

export function DefaultLayout({ variant, children }: DefaultLayoutProps) {
  return (
    <DefaultLayoutContainer>
      <Sidebar />

      <ContentContainer page={variant}>
        <Header variant={variant} />

        {children}
      </ContentContainer>
    </DefaultLayoutContainer>
  );
}
