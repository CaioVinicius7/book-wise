import { styled } from "@/styles/stitches.config";

export const ReviewFormContainer = styled("div", {
  padding: "$6",

  backgroundColor: "$gray700",
  borderRadius: 8,

  display: "grid",
  gap: "$6"
});

export const ReviewFormHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",

  div: {
    display: "flex",
    alignItems: "center",
    gap: "$4",

    strong: {
      color: "$gray100",
      lineHeight: "$shorter"
    }
  }
});

export const FormContainer = styled("form", {
  display: "grid",
  gap: "$3",

  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "$2"
  }
});

export const FormButton = styled("button", {
  all: "unset",

  padding: "$2",

  backgroundColor: "$gray600",
  borderRadius: 4,

  display: "flex",
  placeItems: "center",

  cursor: "pointer",

  "&:hover": {
    transition: "0.2s",
    filter: "brightness(0.9)"
  }
});

export const ResetButton = styled(FormButton, {
  svg: {
    color: "$purple100"
  }
});

export const SubmitButton = styled(FormButton, {
  svg: {
    color: "$green100"
  }
});
