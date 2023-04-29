import { styled } from "@/styles/stitches.config";

export const CommentCardContainer = styled("article", {
  padding: "$6",

  borderRadius: 8,

  variants: {
    background: {
      primary: {
        backgroundColor: "$gray700"
      },
      secondary: {
        backgroundColor: "$gray600"
      }
    }
  },

  defaultVariants: {
    background: "primary"
  }
});

export const CommentCardHeaderContainer = styled("header", {
  display: "flex",
  justifyContent: "space-between"
});

export const CommentCardHeaderUserData = styled("div", {
  display: "flex",
  gap: "$4",

  div: {
    display: "block",

    strong: {
      fontWeight: "$regular",
      lineHeight: "$base"
    },

    time: {
      display: "block",
      fontSize: "$sm",
      color: "$gray400",
      lineHeight: "$base"
    }
  }
});

export const CommentCardContentBaseContainer = styled("div", {
  p: {
    fontSize: "$sm",
    color: "$gray300",
    lineHeight: "$base",
    textOverflow: "ellipsis",
    overflow: "hidden"
  }
});

export const CommentCardContentContainer = styled(
  CommentCardContentBaseContainer,
  {
    marginTop: "$4"
  }
);

export const CommentCardContentWithBookDetailsContainer = styled(
  CommentCardContentBaseContainer,
  {
    marginTop: "$8",

    display: "flex",
    gap: "$5",

    img: {
      borderRadius: "$sm"
    }
  }
);

export const CommentContentWithBookDetailsAndRatingContainer = styled(
  CommentCardContentBaseContainer,
  {
    display: "flex",
    gap: "$5",

    img: {
      borderRadius: "$sm"
    },

    div: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }
);

export const CommentContentWithBookDetailsRatingAndDateContainer = styled(
  CommentCardContentBaseContainer,
  {
    display: "flex",
    gap: "$5",

    img: {
      borderRadius: "$sm"
    },

    div: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }
);

export const CommentCardContentHeader = styled("header", {
  marginBottom: "$5",

  strong: {
    lineHeight: "$base"
  },

  span: {
    display: "block",
    fontSize: "$sm",
    color: "$gray400",
    lineHeight: "$base"
  }
});

export const CommentCardContentHeaderTimeAndDate = styled("div", {
  marginBottom: "$2",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  time: {
    fontSize: "$sm",
    color: "$gray400",
    lineHeight: "$base"
  }
});

export const ShowMoreButton = styled("button", {
  fontWeight: "$bold",
  fontSize: "$sm",
  color: "$purple100",

  cursor: "pointer"
});
