import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChartLineUp, Binoculars, User, SignIn, SignOut } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import {
  NavBarContainer,
  NavigationContainer,
  NavigationList,
  NavigationListItem,
  SignInButton,
  SignOutButton
} from "./styles";

import { SignInModal } from "../SignInModal";
import { Avatar } from "../Avatar";

import logo from "../../assets/logo.svg";

const DEFAULT_ICONS_SIZE = 24;

export function Navbar() {
  const userIsLogged = false;

  const { asPath } = useRouter();

  return (
    <NavBarContainer>
      <div>
        <header>
          <Image src={logo} width={160} alt="Logo Book Wise" />
        </header>

        <NavigationContainer>
          <NavigationList>
            <NavigationListItem currentPage={asPath === "/home"}>
              <Link href="/home">
                <ChartLineUp size={DEFAULT_ICONS_SIZE} />
                Início
              </Link>
            </NavigationListItem>
            <NavigationListItem currentPage={asPath === "/explore"}>
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
          </NavigationList>
        </NavigationContainer>
      </div>

      <footer>
        {userIsLogged ? (
          <SignOutButton>
            <Avatar imageUrl="https://github.com/caiovinicius7.png" size="sm" />
            Caio
            <SignOut size={20} weight="bold" />
          </SignOutButton>
        ) : (
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <SignInButton>
                Fazer Login
                <SignIn size={20} weight="bold" />
              </SignInButton>
            </Dialog.Trigger>
            <SignInModal />
          </Dialog.Root>
        )}
      </footer>
    </NavBarContainer>
  );
}
