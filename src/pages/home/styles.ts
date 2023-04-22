import { styled } from "@/styles/stitches.config";

export const HomeContainer = styled("main", {
  height: "100%",
  paddingTop: "$10",

  overflow: "auto",
  overflowX: "hidden",

  display: "flex",
  gap: 64
});

export const BooksReviewContainer = styled("main", {
  flex: 1,
  height: "100%",

  overflow: "auto",
  paddingRight: 6,

  section: {
    display: "flex",
    flexDirection: "column",
    gap: "$3",

    h2: {
      fontSize: "0.875rem",
      marginBottom: "$1"
    }
  }
});
