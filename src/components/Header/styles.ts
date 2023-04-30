import { styled } from "@/styles/stitches.config";

export const HeaderContainer = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  h1: {
    color: "$gray100",
    fontSize: "$2xl",
    lineHeight: "$short",

    display: "flex",
    alignItems: "center",
    gap: "$4",

    svg: {
      color: "$green100"
    }
  }
});
