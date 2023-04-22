import { useState } from "react";
import { X } from "phosphor-react";

import { BookReviewCard } from "@/components/BookReviewCard";

import {
  BookReviewsSidebarContainer,
  CloseButton,
  ReviewsContainer,
  ReviewsHeader
} from "./styles";

import { ReviewForm } from "../ReviewForm";
import { BookSummaryCard } from "../BookSummaryCard";

interface BookReviewsSidebarProps {
  onClose(): void;
}

export function BookReviewsSidebar({ onClose }: BookReviewsSidebarProps) {
  const [reviewFormIsVisible, setReviewFormIsVisible] = useState(false);

  function handleChangeFormReviewVisibility() {
    setReviewFormIsVisible((state) => !state);
  }

  return (
    <BookReviewsSidebarContainer>
      <CloseButton title="Fechar barra lateral" type="button" onClick={onClose}>
        <X size={24} color="#8D95AF" />
      </CloseButton>

      <BookSummaryCard
        title="Código Limpo"
        author="Robert C. Martin"
        rating={5}
        coverImageUrl="/codigo-limpo.png"
        variant="sidebar"
      />

      <ReviewsContainer>
        <ReviewsHeader>
          <span>Avaliações</span>
          <button onClick={handleChangeFormReviewVisibility}>Avaliar</button>
        </ReviewsHeader>

        {reviewFormIsVisible && (
          <ReviewForm onCancelReview={handleChangeFormReviewVisibility} />
        )}

        <BookReviewCard
          avatarImageUrl="https://github.com/caiovinicius7.png"
          userName="Caio Vinícius"
          reviewedAt={new Date().toISOString()}
          bookCoverImageUrl={`/o-hobbit.png`}
          bookName="O Hobbit"
          bookAuthor="J.R.R. Tolkien"
          rating={4}
          review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quod quisquam consequuntur ex atque, laudantium reiciendis aliquid quos dolor, magni modi dicta provident illum cumque numquam voluptates quae, error dignissimos, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quod quisquam consequuntur ex atque, laudantium reiciendis aliquid quos dolor, magni modi dicta provident illum cumque numquam voluptates quae, error dignissimos, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quod quisquam consequuntur ex atque, laudantium reiciendis aliquid quos dolor, magni modi dicta provident illum cumque numquam voluptates quae, error dignissimos."
        />

        <BookReviewCard
          avatarImageUrl="https://github.com/caiovinicius7.png"
          userName="Caio Vinícius"
          reviewedAt={new Date().toISOString()}
          bookCoverImageUrl={`/o-hobbit.png`}
          bookName="O Hobbit"
          bookAuthor="J.R.R. Tolkien"
          rating={4}
          review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quod quisquam consequuntur ex atque, laudantium reiciendis aliquid quos dolor, magni modi dicta provident illum cumque numquam voluptates quae, error dignissimos, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quod quisquam consequuntur ex atque, laudantium reiciendis aliquid quos dolor, magni modi dicta provident illum cumque numquam voluptates quae, error dignissimos, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quod quisquam consequuntur ex atque, laudantium reiciendis aliquid quos dolor, magni modi dicta provident illum cumque numquam voluptates quae, error dignissimos."
        />
      </ReviewsContainer>
    </BookReviewsSidebarContainer>
  );
}
