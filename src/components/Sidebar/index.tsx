import Link from "next/link";
import Image from "next/image";
import { SignIn, SignOut } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import { SidebarContainer, SignInButton, SignOutButton } from "./styles";

import { SignInModal } from "../SignInModal";
import { Navigation } from "../Navigation";
import { Avatar } from "../Avatar";

import logo from "../../assets/logo.svg";

export function Sidebar() {
  const userIsLogged = false;

  return (
    <SidebarContainer>
      <div>
        <header>
          <Link href={"/home"}>
            <Image src={logo} width={160} alt="Logo Book Wise" />
          </Link>
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
