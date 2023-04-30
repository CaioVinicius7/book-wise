import { keyframes, styled } from "@/styles/stitches.config";

const entrance = keyframes({
  from: {
    translate: "100%"
  },
  to: {
    translate: "0%"
  }
});

export const TrendingBooksSidebarContainer = styled("aside", {
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
