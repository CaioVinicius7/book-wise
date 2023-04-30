import { styled } from "@/styles/stitches.config";

import navbarBackgroundImage from "../../assets/navbar-background.png";

export const SidebarContainer = styled("section", {
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
    justifyContent: "center",
    gap: 64
  },

  "@md": {
    display: "none"
  }
});

const Button = styled("button", {
  cursor: "pointer",

  color: "$gray200",

  display: "flex",
  alignItems: "center",
  gap: "$3",

  transition: "0.2s",

  "&:hover": {
    filter: "brightness(0.8)"
  }
});

export const SignInButton = styled(Button, {
  fontWeight: "$bold",

  svg: {
    color: "$green100"
  }
});

export const SignOutButton = styled(Button, {
  svg: {
    color: "$red100"
  }
});
