import { useRouter } from "next/router";
import Link from "next/link";
import { ChartLineUp, Binoculars, User } from "phosphor-react";

import { NavigationContainer, NavigationListItem } from "./styles";

const DEFAULT_ICONS_SIZE = 24;

export function Navigation() {
  const { asPath } = useRouter();

  const userIsLogged = false;

  return (
    <NavigationContainer>
      <NavigationListItem currentPage={asPath === "/home"}>
        <Link href="/home">
          <ChartLineUp size={DEFAULT_ICONS_SIZE} />
          Início
        </Link>
      </NavigationListItem>
      <NavigationListItem currentPage={asPath.includes("/explore")}>
        <Link href="/explore">
          <Binoculars size={DEFAULT_ICONS_SIZE} />
          Explorar
        </Link>
      </NavigationListItem>

      {userIsLogged && (
        <NavigationListItem currentPage={asPath === "/profile"}>
          <Link href="/profile">
            <User size={DEFAULT_ICONS_SIZE} />
            Perfil
          </Link>
        </NavigationListItem>
      )}
    </NavigationContainer>
  );
}
