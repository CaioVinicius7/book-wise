import { styled } from "@/styles/stitches.config";

export const BookSummaryCardContainer = styled("article", {
  padding: "$4 $5",
  backgroundColor: "$gray700",
  borderRadius: 8,

  cursor: "pointer",

  display: "flex",
  gap: "$5"
});

export const BookSummaryCardContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  header: {
    strong: {
      lineHeight: "$base"
    },

    span: {
      display: "block",
      fontSize: "$sm",
      color: "$gray400",
      lineHeight: "$base"
    }
  }
});
