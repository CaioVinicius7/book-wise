import { styled } from "@/styles/stitches.config";

import navbarBackgroundImage from "../../assets/navbar-background.png";

export const NavBarContainer = styled("section", {
  maxWidth: 232,
  height: "100%",
  background: "$gray700",
  borderRadius: "$md",
  backgroundImage: `url(${navbarBackgroundImage.src})`,
  backgroundPosition: "center",
  backgroundSize: "cover",

  paddingTop: 40,
  paddingLeft: 52,
  paddingRight: 52,
  paddingBottom: 24,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",

  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  "@md": {
    display: "none"
  }
});

export const NavigationContainer = styled("nav", {
  marginTop: 72
});

export const NavigationList = styled("ul", {
  listStyle: "none",

  display: "flex",
  flexDirection: "column",
  gap: "$6",

  li: {}
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

export const SignInButton = styled("button", {
  all: "unset",

  cursor: "pointer",

  fontWeight: "$bold",
  color: "$gray200",

  display: "flex",
  alignItems: "center",
  gap: "$3",

  transition: "0.2s",

  svg: {
    color: "$green100"
  },

  "&:hover": {
    filter: "brightness(0.8)"
  }
});
