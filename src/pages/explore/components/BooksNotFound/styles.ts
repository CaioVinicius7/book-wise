import { styled } from "@/styles/stitches.config";

export const BooksNotFoundContainer = styled("div", {
  height: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  img: {
    filter: "invert(90%)"
  },

  strong: {
    marginTop: "$4",

    fontSize: "$2xl",
    color: "$gray200",
    lineHeight: "$base"
  },

  span: {
    color: "$gray200",
    lineHeight: "$base"
  }
});
