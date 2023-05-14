import { styled } from "@/styles/stitches.config";

export const GoBackButtonContainer = styled("button", {
  color: "$gray200",
  fontWeight: "$bold",
  fontSize: "$sm",

  cursor: "pointer",

  display: "flex",
  alignItems: "center",
  gap: "$3",

  "&:hover": {
    transition: "0.2s",

    filter: "brightness(0.8)"
  }
});
