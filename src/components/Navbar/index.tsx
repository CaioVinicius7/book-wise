import Image from "next/image";
import Link from "next/link";
import { ChartLineUp, Binoculars, User, SignIn } from "phosphor-react";

import {
  NavBarContainer,
  NavigationContainer,
  NavigationList,
  NavigationListItem,
  SignInButton
} from "./styles";

import logo from "../../assets/logo.svg";

const DEFAULT_ICONS_SIZE = 24;

export function Navbar() {
  return (
    <NavBarContainer>
      <div>
        <header>
          <Image src={logo} width={160} alt="Logo Book Wise" />
        </header>

        <NavigationContainer>
          <NavigationList>
            <NavigationListItem currentPage={true}>
              <Link href="#">
                <ChartLineUp size={DEFAULT_ICONS_SIZE} />
                Início
              </Link>
            </NavigationListItem>
            <NavigationListItem currentPage={false}>
              <Link href="#">
                <Binoculars size={DEFAULT_ICONS_SIZE} />
                Explorar
              </Link>
            </NavigationListItem>
            <NavigationListItem currentPage={false}>
              <Link href="#">
                <User size={DEFAULT_ICONS_SIZE} />
                Perfil
              </Link>
            </NavigationListItem>
          </NavigationList>
        </NavigationContainer>
      </div>

      <footer>
        <SignInButton>
          Fazer Login
          <SignIn size={20} weight="bold" />
        </SignInButton>
      </footer>
    </NavBarContainer>
  );
}
