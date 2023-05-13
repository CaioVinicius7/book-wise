import { styled } from "@/styles/stitches.config";

export const DefaultLayoutContainer = styled("div", {
  padding: "$5",

  display: "flex",
  overflowX: "clip"
});

export const ContentContainer = styled("div", {
  width: "stretch",
  padding: "3.25rem 6rem",

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
