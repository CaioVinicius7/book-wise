import { styled } from "@/styles/stitches.config";

export const TextareaContainer = styled("fieldset", {
  all: "unset",

  display: "grid",
  position: "relative"
});

export const TextareaElement = styled("textarea", {
  height: 164,

  resize: "none",

  backgroundColor: "$gray800",
  color: "$gray400",
  fontSize: "$sm",

  border: "1px solid $gray500",
  borderRadius: 4,

  "&:focus": {
    border: "1px solid $gray400"
  },

  "&::placeholder": {
    color: "$gray400"
  },

  variants: {
    showCounter: {
      true: {
        padding: "$3 $5 $6"
      },
      false: {
        padding: "$3 $5"
      }
    }
  }
});

export const Counter = styled("span", {
  position: "absolute",
  bottom: "$1",
  right: "$2",

  color: "$gray400",
  fontSize: "$xs",
  lineHeight: "$short"
});
