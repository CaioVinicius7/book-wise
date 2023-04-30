import Image from "next/image";
import { Rating } from "react-simple-star-rating";

import { TrendingBookCardContainer, TrendingBookCardContent } from "./styles";

interface TrendingBookCardProps {
  title: string;
  author: string;
  rating: number;
  CoverImgUrl: string;
}

export function TrendingBookCard({
  title,
  author,
  rating,
  CoverImgUrl
}: TrendingBookCardProps) {
  return (
    <TrendingBookCardContainer>
      <Image
        src={{
          src: CoverImgUrl,
          width: 64,
          height: 94
        }}
        alt="Book cover"
      />

      <TrendingBookCardContent>
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
      </TrendingBookCardContent>
    </TrendingBookCardContainer>
  );
}
