import { styled } from "@/styles/stitches.config";

export const BookSummaryCardContainer = styled("button", {
  padding: "$4 $5",

  outline: "none",

  backgroundColor: "$gray700",
  borderRadius: 8,
  border: "2px solid $gray700",

  variants: {
    isListVariant: {
      true: {
        cursor: "pointer",

        "&:hover, &:focus": {
          border: "2px solid $gray600"
        }
      },
      false: {
        width: "100%"
      }
    }
  },

  defaultVariants: {
    isListVariant: true
  }
});

export const BookSummaryCardContentContainer = styled("div", {
  display: "flex",
  gap: "$5",

  div: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    header: {
      strong: {
        color: "$gray100",
        fontSize: "$md",
        lineHeight: "$base"
      },

      span: {
        display: "block",
        fontSize: "$sm",
        color: "$gray400",
        lineHeight: "$base"
      }
    },

    footer: {
      span: {
        color: "$gray400",
        fontSize: "$sm",
        lineHeight: "$short",

        display: "block"
      }
    }
  },

  "@media(max-width: 400px)": {
    img: {
      width: 108,
      height: 152
    }
  }
});

export const BookSummaryCardFooterContainer = styled("footer", {
  marginTop: "$10",
  padding: "$6 0 0 0",

  borderTop: "1px solid $gray600",

  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "$4",

  div: {
    display: "flex",
    alignItems: "center",
    gap: "$5",

    div: {
      display: "unset",

      span: {
        fontSize: "$sm",
        color: "$gray300",
        lineHeight: "$short",

        display: "block"
      },
      strong: {
        color: "$gray200",
        lineHeight: "$short"
      }
    }
  }
});
