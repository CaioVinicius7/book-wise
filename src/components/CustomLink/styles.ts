import Link from "next/link";

import { styled } from "@/styles/stitches.config";

export const CustomLinkContainer = styled(Link, {
  fontSize: "0.875rem",
  color: "$purple100",
  fontWeight: "$bold",
  textDecoration: "none",

  display: "flex",
  alignItems: "center",
  gap: "$2",

  variants: {
    withHoverEffect: {
      true: {
        position: "relative",

        "&::after": {
          content: "",
          position: "absolute",
          display: "block",
          height: 1.5,
          width: 0,
          backgroundColor: "$purple100",
          bottom: -4,

          transition: "0.25s"
        },

        "&:hover::after": {
          width: "100%"
        }
      }
    }
  },

  defaultVariants: {
    withHoverEffect: true
  }
});
