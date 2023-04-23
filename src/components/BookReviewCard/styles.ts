import { keyframes, styled } from "@/styles/stitches.config";

const entrance = keyframes({
  from: {
    transform: "translateY(100%)"
  },
  to: {
    transform: "translateY(0%)"
  }
});

export const BookReviewCardContainer = styled("article", {
  padding: "$6",

  backgroundColor: "$gray700",
  borderRadius: 8,

  display: "flex",
  flexDirection: "column",
  gap: "$8",

  variants: {
    animate: {
      true: {
        animation: `${entrance} 0.6s`
      }
    }
  }
});

export const BookReviewCardHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",

  div: {
    display: "flex",
    gap: "$4",

    div: {
      display: "block",

      strong: {
        fontWeight: "$regular",
        lineHeight: "$base"
      },

      time: {
        display: "block",
        fontSize: "$sm",
        color: "$gray400",
        lineHeight: "$base"
      }
    }
  }
});

export const BookReviewCardContent = styled("div", {
  display: "flex",
  gap: "$5",

  p: {
    fontSize: "$sm",
    color: "$gray300",
    lineHeight: "$base",
    textOverflow: "ellipsis",
    overflow: "hidden"
  },

  img: {
    borderRadius: "$sm"
  }
});

export const BookReviewCardContentHeader = styled("header", {
  marginBottom: "$5",

  strong: {
    lineHeight: "$base"
  },

  span: {
    display: "block",
    fontSize: "$sm",
    color: "$gray400",
    lineHeight: "$base"
  }
});

export const ShowMoreButton = styled("button", {
  fontWeight: "$bold",
  fontSize: "$sm",
  color: "$purple100",

  cursor: "pointer"
});
