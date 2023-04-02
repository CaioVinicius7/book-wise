import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";
import dayjs from "dayjs";

import {
  BookReviewCardContainer,
  BookReviewCardContent,
  BookReviewCardContentHeader,
  BookReviewCardHeader,
  ShowMoreButton
} from "./styles";

import { Avatar } from "../Avatar";

interface BookReviewCardProps {
  avatarImageUrl: string;
  userName: string;
  reviewedAt: Date;
  bookCoverImageUrl: string;
  bookName: string;
  bookAuthor: string;
  review: string;
}

export function BookReviewCard({
  avatarImageUrl,
  userName,
  reviewedAt,
  bookCoverImageUrl,
  bookName,
  bookAuthor,
  review
}: BookReviewCardProps) {
  const [showMore, setShowMore] = useState(false);

  const reviewDistanceToNow = dayjs(reviewedAt).fromNow();

  const textIsTooLarge = review.length > 350;
  const partialText = textIsTooLarge
    ? `${review.substring(0, 350)}...`
    : review;

  return (
    <BookReviewCardContainer>
      <BookReviewCardHeader>
        <div>
          <Avatar imageUrl={avatarImageUrl} size="md" />

          <div>
            <strong>{userName}</strong>
            <span>{reviewDistanceToNow}</span>
          </div>
        </div>

        <Rating size={20} fillColor="#8381D9" initialValue={4} readonly />
      </BookReviewCardHeader>

      <BookReviewCardContent>
        <Image
          src={bookCoverImageUrl}
          width={108}
          height={152}
          alt="Capa do livro"
        />

        <div>
          <BookReviewCardContentHeader>
            <strong>{bookName}</strong>
            <span>{bookAuthor}</span>
          </BookReviewCardContentHeader>

          <p>
            {showMore ? review : partialText}{" "}
            {textIsTooLarge && (
              <ShowMoreButton onClick={() => setShowMore((state) => !state)}>
                {showMore ? "Ver menos" : "Ver mais"}
              </ShowMoreButton>
            )}
          </p>
        </div>
      </BookReviewCardContent>
    </BookReviewCardContainer>
  );
}
