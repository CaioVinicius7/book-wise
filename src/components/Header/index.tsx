import { ReactElement } from "react";
import { useRouter } from "next/router";
import { Binoculars, ChartLineUp, User } from "phosphor-react";

import { SearchInput } from "../SearchInput";
import { Menu } from "../Menu";
import { GoBackButton } from "../GoBackButton";

import { HeaderContainer } from "./styles";

type HeaderVariants = "home" | "explore" | "profile";

interface HeaderOptions {
  title: string;
  icon: ReactElement;
}

interface HeaderProps {
  variant: HeaderVariants;
  returnable?: boolean;
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

export function Header({ variant, returnable }: HeaderProps) {
  const router = useRouter();

  return (
    <HeaderContainer placeholder="Buscar livro ou autor">
      {returnable ? (
        <GoBackButton onClick={() => router.back()} withText />
      ) : (
        <h1>
          {headerVariant[variant].icon}
          {headerVariant[variant].title}
        </h1>
      )}

      {variant === "explore" && (
        <SearchInput
          placeholder="Buscar livro ou autor"
          sizeVariant="header"
          onSearch={() => {
            alert("Search completed");
          }}
        />
      )}

      <Menu />
    </HeaderContainer>
  );
}
