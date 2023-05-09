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

export const BookListContainer = styled("section", {
  overflow: "auto",

  paddingRight: 6,

  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "$5",

  animation: `${entrance} 0.6s, ${opacity} 1.2s`
});
