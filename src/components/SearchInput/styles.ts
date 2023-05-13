import { styled } from "@/styles/stitches.config";

export const SearchInputContainer = styled("div", {
  padding: "0.875rem $5",
  maxHeight: 48,

  border: "1px solid $gray500",
  borderRadius: 4,

  display: "flex",
  alignItems: "center",
  gap: "$2",

  "&:has(input:focus)": {
    borderColor: "$green200",

    svg: {
      color: "$green200"
    }
  },

  variants: {
    sizeVariant: {
      header: {
        maxWidth: 448,
        width: "100%",

        "@md": {
          display: "none"
        }
      },
      body: {
        width: "100%"
      }
    }
  },

  defaultVariants: {
    sizeVariant: "body"
  }
});

export const Input = styled("input", {
  all: "unset",
  flex: 1,

  color: "$gray200",
  fontSize: "$sm",

  "&::placeholder": {
    color: "$gray400"
  }
});

export const SearchButton = styled("button", {
  cursor: "pointer",

  svg: {
    color: "$gray500"
  },

  "&:focus": {
    svg: {
      color: "$green200"
    }
  }
});
