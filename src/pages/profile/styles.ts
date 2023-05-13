import { keyframes, styled } from "@/styles/stitches.config";

const entrance = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(100%)"
  },
  to: {
    opacity: 1,
    transform: "translateY(0%)"
  }
});

const opacity = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});

export const ProfileContainer = styled("div", {
  height: "100%",
  paddingTop: "$10",

  overflowX: "hidden",

  display: "flex",
  gap: 64
});

export const BooksReviewContainer = styled("main", {
  flex: 1,
  height: "100%",

  paddingRight: "$2",

  display: "grid",
  gap: "$8",

  animation: `${entrance} 0.6s, ${opacity} 1.2s`
});
