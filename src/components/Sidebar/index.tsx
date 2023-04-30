import Image from "next/image";
import { SignIn, SignOut } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import { SidebarContainer, SignInButton, SignOutButton } from "./styles";

import { SignInModal } from "../SignInModal";
import { Avatar } from "../Avatar";

import logo from "../../assets/logo.svg";
import { Navigation } from "../Navigation";

export function Sidebar() {
  const userIsLogged = false;

  return (
    <SidebarContainer>
      <div>
        <header>
          <Image src={logo} width={160} alt="Logo Book Wise" />
        </header>

        <Navigation />
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
    </SidebarContainer>
  );
}
