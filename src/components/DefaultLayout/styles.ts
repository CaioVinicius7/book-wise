import { styled } from "@/styles/stitches.config";

export const DefaultLayoutContainer = styled("div", {
  padding: "$5",
  height: "100vh",

  display: "flex"
});

export const ContentContainer = styled("div", {
  flex: 1,
  padding: "52px 96px",

  "@lg": {
    padding: "36px 24px"
  },

  "@sm": {
    padding: "36px 0px"
  }
});
