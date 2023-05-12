import { BookOpen, BookmarkSimple, Books, UserList } from "phosphor-react";

import { Avatar } from "@/components/Avatar";

import {
  Divider,
  ProfileSummarySidebarContainer,
  ProfileSummarySidebarContent,
  ProfileSummarySidebarHeader,
  StatsList
} from "./styles";

const DEFAULT_ICONS_SIZE = 32;

export function ProfileSummarySidebar() {
  return (
    <ProfileSummarySidebarContainer>
      <ProfileSummarySidebarHeader>
        <Avatar imageUrl="https://github.com/caiovinicius7.png" size="lg" />

        <strong>Caio Vinícius</strong>
        <span>membro desde 2022</span>
      </ProfileSummarySidebarHeader>

      <Divider />

      <ProfileSummarySidebarContent>
        <StatsList>
          <li>
            <BookOpen size={DEFAULT_ICONS_SIZE} />

            <div>
              <strong>3853</strong>
              <span>Páginas lidas</span>
            </div>
          </li>
          <li>
            <Books size={DEFAULT_ICONS_SIZE} />

            <div>
              <strong>10</strong>
              <span>Livros avaliados</span>
            </div>
          </li>
          <li>
            <UserList size={DEFAULT_ICONS_SIZE} />

            <div>
              <strong>8</strong>
              <span>Autores lidos</span>
            </div>
          </li>
          <li>
            <BookmarkSimple size={DEFAULT_ICONS_SIZE} />

            <div>
              <strong>Computação</strong>
              <span>Categoria mais lida</span>
            </div>
          </li>
        </StatsList>
      </ProfileSummarySidebarContent>
    </ProfileSummarySidebarContainer>
  );
}
