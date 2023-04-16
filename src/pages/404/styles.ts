import { styled } from "@/styles/stitches.config";

export const NotFoundContainer = styled("main", {
  height: "100vh",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  gap: "$6",

  h1: {
    color: "$gray200"
  },

  a: {
    all: "unset",

    padding: "$4",
    backgroundColor: "$gray600",
    borderRadius: "$md",

    fontWeight: "bold",
    fontSize: "$sm",
    textTransform: "uppercase",

    cursor: "pointer",
    transition: "0.2s",

    "&:hover": {
      backgroundColor: "$gray700"
    }
  }
});
