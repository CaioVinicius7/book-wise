import { styled } from "@/styles/stitches.config";

export const CategoriesContainer = styled("div", {
  marginTop: "3rem",
  paddingBottom: "$2",

  overflow: "auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "$3",

  "&::-webkit-scrollbar": {
    height: 6
  }
});

export const CategoryTag = styled("button", {
  all: "unset",

  padding: "$1 $4",

  color: "$purple100",
  fontSize: "$md",
  whiteSpace: "nowrap",

  border: "1px solid $purple100",
  borderRadius: "$full",

  cursor: "pointer",
  transition: "colors 0.2s",

  "&:hover": {
    color: "$gray100",
    backgroundColor: "$purple200",
    borderColor: "$purple200"
  },

  variants: {
    selected: {
      true: {
        color: "$gray100",
        borderColor: "$purple200",
        backgroundColor: "$purple200",

        "&:hover": {
          borderColor: "$purple100"
        }
      }
    }
  }
});
