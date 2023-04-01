import { styled } from "@/styles/stitches.config";

export const PopularBooksSidebarContainer = styled("aside", {
  width: 324,

  display: "flex",
  flexDirection: "column",
  gap: "$4",

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    h2: {
      fontSize: "0.875rem"
    },

    a: {
      fontSize: "0.875rem",
      color: "$purple100",
      fontWeight: "$bold",
      textDecoration: "none",

      display: "flex",
      alignItems: "center",
      gap: "$2",

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
  },

  ul: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "$3"
  },

  "@lg": {
    display: "none"
  }
});
