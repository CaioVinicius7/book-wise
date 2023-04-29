import { keyframes, styled } from "@/styles/stitches.config";

const entrance = keyframes({
  from: {
    transform: "translateY(100%)"
  },
  to: {
    transform: "translateY(0%)"
  }
});

export const HomeContainer = styled("div", {
  height: "100%",
  paddingTop: "$10",

  overflow: "hidden",
  overflowX: "hidden",

  display: "flex",
  gap: 64
});

export const BooksReviewContainer = styled("main", {
  flex: 1,
  height: "100%",

  overflow: "auto",
  paddingRight: "$2",

  display: "grid",
  gap: "$10",

  animation: `${entrance} 0.6s`,

  section: {
    display: "flex",
    flexDirection: "column",
    gap: "$3"
  }
});

export const BooksReviewSectionHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",

  h2: {
    fontSize: "0.875rem",
    marginBottom: "$1"
  }
});
