import { List } from "phosphor-react";

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
        <List size={32} />
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
