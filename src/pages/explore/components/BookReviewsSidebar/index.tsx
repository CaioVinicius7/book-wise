import { useState } from "react";
import { X } from "phosphor-react";

import { Comment } from "@/components/CommentCard";

import {
  BookReviewsSidebarOverlay,
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

  const comment =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quod quisquam consequuntur ex atque, laudantium reiciendis aliquid quos dolor, magni modi dicta provident illum cumque numquam voluptates quae, error dignissimos, Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

  function handleChangeFormReviewVisibility() {
    setReviewFormIsVisible((state) => !state);
  }

  return (
    <>
      <BookReviewsSidebarOverlay onClick={onClose} />

      <BookReviewsSidebarContainer>
        <CloseButton
          title="Fechar barra lateral"
          type="button"
          onClick={onClose}
        >
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

          {Array(1, 2, 3).map((_, i) => {
            return (
              <Comment.Root key={i}>
                <Comment.Header
                  userName="Caio Vinícius"
                  userAvatarImgUrl="https://github.com/caiovinicius7.png"
                  userRating={5}
                  commentedAt={new Date()}
                />

                <Comment.Content comment={comment} />
              </Comment.Root>
            );
          })}
        </ReviewsContainer>
      </BookReviewsSidebarContainer>
    </>
  );
}
