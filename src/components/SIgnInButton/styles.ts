import { styled } from "@/styles/stitches.config";

export const Button = styled("button", {
  all: "unset",

  height: 72,
  maxWidth: 324,
  width: "100%",

  padding: "0 $6",
  borderRadius: "8px",
  color: "$gray200",
  backgroundColor: "$gray600",
  fontSize: "$lg",

  display: "flex",
  alignItems: "center",
  gap: "$5",

  cursor: "pointer",

  "&:hover": {
    filter: "brightness(0.8)",
    transition: "0.2s"
  }
});
