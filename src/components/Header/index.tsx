import { ReactElement } from "react";
import { Binoculars, ChartLineUp, User } from "phosphor-react";

import { HeaderContainer } from "./styles";

type HeaderVariants = "home" | "explore" | "profile";

interface HeaderOptions {
  title: string;
  icon: ReactElement;
}

interface HeaderProps {
  variant: HeaderVariants;
}

const headerVariant: Record<HeaderVariants, HeaderOptions> = {
  home: {
    title: "Início",
    icon: <ChartLineUp size={32} />
  },
  explore: {
    title: "Explorar",
    icon: <Binoculars size={32} />
  },
  profile: {
    title: "Perfil",
    icon: <User size={32} />
  }
};

export function Header({ variant }: HeaderProps) {
  return (
    <HeaderContainer>
      <h1>
        {headerVariant[variant].icon}
        {headerVariant[variant].title}
      </h1>
    </HeaderContainer>
  );
}
