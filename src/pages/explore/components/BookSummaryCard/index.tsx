import type { ReactNode } from "react";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { BookOpen, BookmarkSimple } from "phosphor-react";

import {
  BookSummaryCardContainer,
  BookSummaryCardContentContainer,
  BookSummaryCardFooterContainer
} from "./styles";
import { Categories } from "../Categories";

interface BookSummaryCardProps {
  children: ReactNode;
  onSelectBook(): void;
}

function BookSummaryCard({ children, onSelectBook }: BookSummaryCardProps) {
  return (
    <BookSummaryCardContainer onClick={onSelectBook}>
      {children}
    </BookSummaryCardContainer>
  );
}

interface SidebarBookSummaryCardProps {
  children: ReactNode;
}

function SidebarBookSummaryCard({ children }: SidebarBookSummaryCardProps) {
  return (
    <BookSummaryCardContainer isListVariant={false} as="article">
      {children}
    </BookSummaryCardContainer>
  );
}

interface BookSummaryCardContentProps {
  title: string;
  author: string;
  rating: number;
  coverImgUrl: string;
  variant?: "list" | "sidebar";
}

function BookSummaryCardContent({
  title,
  author,
  rating,
  coverImgUrl,
  variant = "list"
}: BookSummaryCardContentProps) {
  const isListVariant = variant === "list";

  const imgSize = {
    width: isListVariant ? 108 : 170,
    height: isListVariant ? 152 : 242
  };

  return (
    <BookSummaryCardContentContainer>
      <Image
        src={coverImgUrl}
        width={imgSize.width}
        height={imgSize.height}
        alt="Capa do livro"
      />

      <div>
        <header>
          <strong>{title}</strong>
          <span>{author}</span>
        </header>

        <footer>
          <Rating
            size={20}
            fillColor="#8381D9"
            initialValue={rating}
            readonly
          />
          {!isListVariant && <span>3 Avaliações</span>}
        </footer>
      </div>
    </BookSummaryCardContentContainer>
  );
}

interface BookSummaryCardFooterProps {
  categories: string[];
  pages: number;
}

function BookSummaryCardFooter({
  categories,
  pages
}: BookSummaryCardFooterProps) {
  const categoriesAsString = categories.join().replace(/,/g, ", ");

  return (
    <BookSummaryCardFooterContainer>
      <div>
        <BookmarkSimple size={24} color="#50B2C0" />

        <div>
          <span>Categoria</span>
          <strong>{categoriesAsString}</strong>
        </div>
      </div>

      <div>
        <BookOpen size={24} color="#50B2C0" />

        <div>
          <span>Páginas</span>
          <strong>{pages}</strong>
        </div>
      </div>
    </BookSummaryCardFooterContainer>
  );
}

export const BookSummary = {
  Root: BookSummaryCard,
  RootAsArticle: SidebarBookSummaryCard,
  Content: BookSummaryCardContent,
  Footer: BookSummaryCardFooter
};
