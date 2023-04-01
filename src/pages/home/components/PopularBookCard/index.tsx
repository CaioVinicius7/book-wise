import Image from "next/image";
import { Rating } from "react-simple-star-rating";

import { PopularBookCardContainer, PopularBookContent } from "./styles";

interface PopularBookCardProps {
  title: string;
  author: string;
  rating: number;
  bookCoverImage: string;
}

export function PopularBookCard({
  title,
  author,
  rating,
  bookCoverImage
}: PopularBookCardProps) {
  return (
    <PopularBookCardContainer>
      <Image
        src={{
          src: `/${bookCoverImage}`,
          width: 64,
          height: 94
        }}
        alt="Book cover"
      />

      <PopularBookContent>
        <header>
          <strong>{title}</strong>
          <span>{author}</span>
        </header>

        <footer>
          <Rating
            size={16}
            fillColor="#8381D9"
            initialValue={rating}
            readonly
          />
        </footer>
      </PopularBookContent>
    </PopularBookCardContainer>
  );
}
