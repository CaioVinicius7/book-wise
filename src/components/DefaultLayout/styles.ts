import { styled } from "@/styles/stitches.config";

export const DefaultLayoutContainer = styled("div", {
  padding: "$5",
  height: "100vh",

  display: "flex"
});

export const ContentContainer = styled("div", {
  flex: 1,
  padding: "3.25rem 6rem",

  overflow: "hidden",

  "@xl": {
    padding: "0 1.5rem 3rem"
  },

  "@lg": {
    padding: "0 1.5rem 3.5rem"
  },

  "@sm": {
    padding: "0 0 3.5rem"
  }
});
