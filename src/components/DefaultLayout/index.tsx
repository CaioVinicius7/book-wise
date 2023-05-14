import { ReactNode } from "react";

import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

import { ContentContainer, DefaultLayoutContainer } from "./styles";

interface DefaultLayoutProps {
  variant: "home" | "explore" | "profile";
  returnable?: boolean;
  children: ReactNode;
}

export function DefaultLayout({
  variant,
  returnable,
  children
}: DefaultLayoutProps) {
  return (
    <DefaultLayoutContainer>
      <Sidebar />

      <ContentContainer>
        <Header variant={variant} returnable={returnable} />

        {children}
      </ContentContainer>
    </DefaultLayoutContainer>
  );
}
