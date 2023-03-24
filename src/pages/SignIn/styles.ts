import { styled } from "@/styles/stitches.config";

import signInBackgroundImage from "../../assets/sign-in-background.png";

export const SignInContainer = styled("div", {
  padding: "$5",
  height: "100vh",

  display: "grid",
  gridTemplateColumns: "40% auto",

  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },

  "@sm": {
    gridTemplateColumns: "auto"
  }
});

export const SignInHero = styled("div", {
  height: "100%",
  borderRadius: "$md",
  backgroundImage: `url(${signInBackgroundImage.src})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@sm": {
    display: "none"
  }
});

export const SignInBox = styled("div", {
  maxWidth: 372,
  width: "100%",

  display: "grid",
  gap: "$10",

  div: {
    h1: {
      color: "$gray100",
      fontSize: "$2xl"
    },

    span: {
      color: "$gray200",
      fontSize: "$md",

      display: "block",
      marginTop: "$3"
    }
  }
});

export const SignInOptions = styled("div", {
  display: "grid",
  gap: "$4"
});
