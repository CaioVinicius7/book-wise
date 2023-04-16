import { styled } from "@/styles/stitches.config";

export const BookListContainer = styled("section", {
  overflow: "auto",

  paddingRight: 6,

  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "$5"
});
