import { keyframes, styled } from "@/styles/stitches.config";

const entrance = keyframes({
  from: {
    translate: "100%"
  },
  to: {
    translate: "0%"
  }
});

export const PopularBooksSidebarContainer = styled("aside", {
  width: 324,

  display: "flex",
  flexDirection: "column",
  gap: "$4",

  animation: `${entrance} 0.6s`,

  header: {
    paddingRight: "$2",

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
    paddingRight: "$2",
    overflowY: "auto",

    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "$3"
  },

  "@lg": {
    display: "none"
  }
});
