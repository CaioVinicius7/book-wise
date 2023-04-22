import { keyframes, styled } from "@/styles/stitches.config";

const entrance = keyframes({
  from: {
    translate: "100%"
  },
  to: {
    translate: "0%"
  }
});

export const BookReviewsSidebarContainer = styled("section", {
  maxWidth: 660,
  width: "100%",
  height: "stretch",
  backgroundColor: "$gray800",

  overflowY: "auto",
  overflowX: "hidden",

  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.5)",

  position: "fixed",
  right: 0,
  top: 0,
  padding: "4rem 3rem",

  animation: `${entrance} 0.4s`,

  "@base": {
    padding: "4rem $4",

    button: {
      top: "$5",
      right: "$4"
    }
  }
});

export const CloseButton = styled("button", {
  all: "unset",

  cursor: "pointer",

  position: "absolute",
  top: "$5",
  right: "3rem"
});

export const ReviewsContainer = styled("div", {
  marginTop: "$10",

  display: "grid",
  gap: "$3"
});

export const ReviewsHeader = styled("header", {
  paddingBottom: "$2",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  span: {
    fontSize: "$sm",
    color: "$gray200"
  },

  button: {
    all: "unset",

    color: "$purple100",
    fontWeight: "$bold",

    cursor: "pointer"
  }
});
