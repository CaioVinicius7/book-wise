import { keyframes, styled } from "@/styles/stitches.config";

const entrance = keyframes({
  from: {
    translate: "100%"
  },
  to: {
    translate: "0%"
  }
});

const opacity = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});

export const ProfileSummarySidebarContainer = styled("aside", {
  minWidth: 308,
  height: "fit-content",

  position: "sticky",
  top: 0,

  display: "flex",
  flexDirection: "column",
  gap: "$4",

  borderLeft: "1px solid $gray700",

  animation: `${entrance} 0.6s, ${opacity} 1.2s`,

  "@lg": {
    display: "none"
  }
});

export const ProfileSummarySidebarHeader = styled("header", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",

  strong: {
    marginTop: "$5",

    fontSize: "$xl",
    lineHeight: "$short"
  },

  span: {
    fontSize: "$sm",
    color: "$gray400",
    lineHeight: "$shorter"
  }
});

export const Divider = styled("hr", {
  width: 32,
  height: 4,

  border: 0,
  borderRadius: "$full",

  background: "$gradient-horizontal",

  margin: "$8 auto"
});

export const ProfileSummarySidebarContent = styled("section", {
  padding: "$5 3.25rem",

  svg: {
    color: "$green100"
  }
});

export const StatsList = styled("ul", {
  listStyle: "none",

  display: "grid",
  gap: "$10",

  li: {
    display: "flex",
    alignItems: "center",
    gap: "$5",

    strong: {
      color: "$gray200",
      lineHeight: "$short",

      display: "block"
    },

    span: {
      color: "$gray400",
      fontSize: "$sm",
      lineHeight: "$short"
    }
  }
});
