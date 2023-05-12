import { styled } from "@/styles/stitches.config";

export const ReviewsPerMonthContainer = styled("section", {
  display: "grid",
  gap: "$6"
});

export const MonthReviews = styled("div", {
  display: "grid",
  gap: "$2"
});

export const MonthReviewsHeader = styled("header", {
  display: "flex",

  h2: {
    fontSize: "0.875rem",
    marginBottom: "$1"
  }
});
