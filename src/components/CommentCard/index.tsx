import { ReactNode, useState } from "react";
import { Rating } from "react-simple-star-rating";
import dayjs from "dayjs";
import Image from "next/image";

import { Avatar } from "../Avatar";

import {
  CommentCardContainer,
  CommentCardHeaderContainer,
  CommentCardHeaderUserData,
  CommentCardContentContainer,
  CommentCardContentWithBookDetailsContainer,
  CommentContentWithBookDetailsAndRatingContainer,
  CommentContentWithBookDetailsRatingAndDateContainer,
  CommentCardContentHeader,
  CommentCardContentHeaderTimeAndDate,
  ShowMoreButton
} from "./styles";

interface CommentCardProps {
  backgroundVariant?: "primary" | "secondary";
  children: ReactNode;
}

function CommentCard({
  backgroundVariant = "primary",
  children
}: CommentCardProps) {
  return (
    <CommentCardContainer background={backgroundVariant}>
      {children}
    </CommentCardContainer>
  );
}

interface CommentCardHeaderProps {
  userName: string;
  userAvatarImgUrl: string;
  userRating: number;
  commentedAt: Date | string;
}

function CommentCardHeader({
  userName,
  userAvatarImgUrl,
  userRating,
  commentedAt
}: CommentCardHeaderProps) {
  const commentDistanceToNow = dayjs(commentedAt).fromNow();

  return (
    <CommentCardHeaderContainer>
      <CommentCardHeaderUserData>
        <Avatar imageUrl={userAvatarImgUrl} size="md" />

        <div>
          <strong>{userName}</strong>
          <time>{commentDistanceToNow}</time>
        </div>
      </CommentCardHeaderUserData>

      <Rating
        size={20}
        fillColor="#8381D9"
        initialValue={userRating}
        readonly
      />
    </CommentCardHeaderContainer>
  );
}

interface CommentCardContentProps {
  comment: string;
}

function CommentCardContent({ comment }: CommentCardContentProps) {
  return (
    <CommentCardContentContainer>
      <p>{comment}</p>
    </CommentCardContentContainer>
  );
}

interface BookDetails {
  name: string;
  author: string;
  coverImgUrl: string;
}

interface CommentContentWithBooksDetailsProps {
  book: BookDetails;
  comment: string;
}

function CommentContentWithBookDetails({
  book,
  comment
}: CommentContentWithBooksDetailsProps) {
  const [showMore, setShowMore] = useState(false);

  const commentIsTooLarge = comment.length > 350;
  const partialComment = commentIsTooLarge
    ? `${comment.substring(0, 350)}...`
    : comment;

  return (
    <CommentCardContentWithBookDetailsContainer>
      <Image
        src={book.coverImgUrl}
        width={108}
        height={152}
        alt="Capa do livro"
      />

      <div>
        <CommentCardContentHeader>
          <strong>{book.name}</strong>
          <span>{book.author}</span>
        </CommentCardContentHeader>

        <p>
          {showMore ? comment : partialComment}{" "}
          {commentIsTooLarge && (
            <ShowMoreButton onClick={() => setShowMore((state) => !state)}>
              {showMore ? "Ver menos" : "Ver mais"}
            </ShowMoreButton>
          )}
        </p>
      </div>
    </CommentCardContentWithBookDetailsContainer>
  );
}

interface CommentContentWithBookDetailsAndRatingProps {
  book: BookDetails;
  rating: number;
  comment: string;
}

function CommentContentWithBookDetailsAndRating({
  book,
  rating,
  comment
}: CommentContentWithBookDetailsAndRatingProps) {
  return (
    <>
      <CommentContentWithBookDetailsAndRatingContainer>
        <Image
          src={book.coverImgUrl}
          width={98}
          height={132}
          alt="Capa do livro"
        />

        <div>
          <CommentCardContentHeader>
            <strong>{book.name}</strong>
            <span>{book.author}</span>
          </CommentCardContentHeader>

          <Rating
            size={20}
            fillColor="#8381D9"
            initialValue={rating}
            readonly
          />
        </div>
      </CommentContentWithBookDetailsAndRatingContainer>

      <CommentCardContentContainer>
        <p>{comment}</p>
      </CommentCardContentContainer>
    </>
  );
}

interface CommentContentWithBookDetailsRatingAndDateProps {
  book: BookDetails;
  rating: number;
  comment: string;
  commentedAt: Date | string;
}

function CommentContentWithBookDetailsRatingAndDate({
  book,
  rating,
  comment,
  commentedAt
}: CommentContentWithBookDetailsRatingAndDateProps) {
  const commentDistanceToNow = dayjs(commentedAt).fromNow();

  const commentIsTooLarge = comment.length > 350;
  const partialComment = commentIsTooLarge
    ? `${comment.substring(0, 150)}...`
    : comment;

  return (
    <CommentContentWithBookDetailsRatingAndDateContainer>
      <Image
        src={book.coverImgUrl}
        width={108}
        height={152}
        alt="Capa do livro"
      />

      <div>
        <CommentCardContentHeader>
          <CommentCardContentHeaderTimeAndDate>
            <time>{commentDistanceToNow}</time>

            <Rating
              size={20}
              fillColor="#8381D9"
              initialValue={rating}
              readonly
            />
          </CommentCardContentHeaderTimeAndDate>

          <strong>{book.name}</strong>
          <span>{book.author}</span>
        </CommentCardContentHeader>

        <p>{partialComment}</p>
      </div>
    </CommentContentWithBookDetailsRatingAndDateContainer>
  );
}

export const Comment = {
  Root: CommentCard,
  Header: CommentCardHeader,
  Content: CommentCardContent,
  ContentWithBookDetails: CommentContentWithBookDetails,
  contentWithBookDetailsAndRating: CommentContentWithBookDetailsAndRating,
  ContentWithBookDetailsRatingAndDate:
    CommentContentWithBookDetailsRatingAndDate
};
