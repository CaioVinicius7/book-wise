import { Comment } from "@/components/CommentCard";

import {
  MonthReviewsHeader,
  MonthReviews,
  ReviewsPerMonthContainer
} from "./styles";

export function ReviewsPerMonth() {
  return (
    <ReviewsPerMonthContainer>
      <MonthReviews>
        <MonthReviewsHeader>
          <h2>Há 2 dias</h2>
        </MonthReviewsHeader>

        <Comment.Root>
          <Comment.contentWithBookDetailsAndRating
            book={{
              name: "Entendendo Algoritmos",
              author: "Aditya Bhargava",
              coverImgUrl: "/entendendo-algoritmos.png"
            }}
            comment="Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.
          Proin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque."
            rating={5}
          />
        </Comment.Root>

        <Comment.Root>
          <Comment.contentWithBookDetailsAndRating
            book={{
              name: "Código limpo",
              author: "Robert C. Martin",
              coverImgUrl: "/codigo-limpo.png"
            }}
            comment="Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.
          Proin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque."
            rating={5}
          />
        </Comment.Root>
      </MonthReviews>

      <MonthReviews>
        <MonthReviewsHeader>
          <h2>Há 1 semana</h2>
        </MonthReviewsHeader>

        <Comment.Root>
          <Comment.contentWithBookDetailsAndRating
            book={{
              name: "O Hobbit",
              author: "J.R.R. Tolkien",
              coverImgUrl: "/o-hobbit.png"
            }}
            comment="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet."
            rating={5}
          />
        </Comment.Root>
      </MonthReviews>

      <MonthReviews>
        <MonthReviewsHeader>
          <h2>Há 2 meses</h2>
        </MonthReviewsHeader>

        <Comment.Root>
          <Comment.contentWithBookDetailsAndRating
            book={{
              name: "O guia do mochileiro das galáxias",
              author: "Douglas",
              coverImgUrl: "/o-guia-do-mochileiro-das-galaxias.png"
            }}
            comment="Ultrices nisl eu id id mattis. Adipiscing est sapien ut vestibulum nec enim. Nisi interdum orci malesuada nisi. Habitant placerat velit enim malesuada senectus ipsum. Ultricies nisl dictum integer hendrerit amet enim. Facilisis consectetur imperdiet ultrices mattis pharetra viverra magnis."
            rating={5}
          />
        </Comment.Root>
      </MonthReviews>
    </ReviewsPerMonthContainer>
  );
}
