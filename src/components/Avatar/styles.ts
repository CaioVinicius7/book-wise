import Image from "next/image";

import { styled } from "@/styles/stitches.config";

export const AvatarContainer = styled(Image, {
  borderRadius: "$full",
  objectFit: "cover",

  background: "$gradient-vertical",

  variants: {
    size: {
      sm: {
        border: "1px solid transparent"
      },
      md: {
        border: "1px solid transparent"
      },
      lg: {
        border: "2px solid transparent"
      }
    }
  }
});
