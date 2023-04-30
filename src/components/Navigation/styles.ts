import { styled } from "@/styles/stitches.config";

export const NavigationContainer = styled("ul", {
  listStyle: "none",

  display: "flex",
  flexDirection: "column",
  gap: "$6"
});

export const NavigationListItem = styled("li", {
  position: "relative",

  a: {
    textDecoration: "none",

    display: "flex",
    alignItems: "center",
    gap: "$3"
  },

  variants: {
    currentPage: {
      true: {
        color: "$gray100",
        fontWeight: "bold",

        "&:before": {
          content: "",
          display: "block",
          width: "4px",
          height: "24px",
          background: "$gradient-vertical",
          borderRadius: "$full",
          position: "absolute",
          left: -20
        },

        a: {
          color: "$gray100"
        }
      },
      false: {
        a: {
          color: "$gray400",

          "&:hover": {
            color: "$gray100",
            transition: "0.2s"
          }
        }
      }
    }
  }
});
