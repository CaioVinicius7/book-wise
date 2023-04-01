import { styled } from "@/styles/stitches.config";

export const HomeContainer = styled("main", {
  height: "100%",
  paddingTop: "$10",

  overflow: "auto",

  display: "flex",
  gap: 64
});

export const BooksContainer = styled("main", {
  flex: 1,
  height: "100%",

  h2: {
    fontSize: "0.875rem"
  }
});
