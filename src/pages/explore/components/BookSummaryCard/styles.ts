import { styled } from "@/styles/stitches.config";

export const BookSummaryCardContainer = styled("article", {
  padding: "$4 $5",
  backgroundColor: "$gray700",
  borderRadius: 8,

  variants: {
    isListVariant: {
      true: {
        cursor: "pointer"
      }
    }
  }
});

export const BookSummaryCardContent = styled("div", {
  display: "flex",
  gap: "$5",

  div: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    header: {
      strong: {
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

export const BookSummaryCardFooter = styled("footer", {
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
  },

  "@media(max-width: 400px)": {
    gridTemplateColumns: "1fr"
  }
});
