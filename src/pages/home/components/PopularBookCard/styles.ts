import { styled } from "@/styles/stitches.config";

export const PopularBookCardContainer = styled("div", {
  padding: "$4 $5",

  backgroundColor: "$gray700",
  borderRadius: 8,

  display: "flex",
  gap: "$5"
});

export const PopularBookContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    strong: {
      lineHeight: "$short",
      maxWidth: "22ch",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },

    span: {
      fontSize: "0.875rem",
      color: "$gray400",
      lineHeight: "$base"
    }
  }
});
