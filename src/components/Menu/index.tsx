import { Turn as Hamburger } from "hamburger-react";

import { Navigation } from "../Navigation";

import {
  MenuContainer,
  MenuPortal,
  MenuTrigger,
  MenuContent,
  MenuArrow
} from "./styles";

export function Menu() {
  return (
    <MenuContainer>
      <MenuTrigger>
        <Hamburger size={26} />
      </MenuTrigger>

      <MenuPortal>
        <MenuContent>
          <MenuArrow />

          <Navigation />
        </MenuContent>
      </MenuPortal>
    </MenuContainer>
  );
}
