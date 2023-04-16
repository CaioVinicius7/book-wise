import * as Dialog from "@radix-ui/react-dialog";

import { styled } from "@/styles/stitches.config";

export const SingInModalPortal = styled(Dialog.Portal, {});

export const SignInModalOverlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: 0,
  background: "rgba(0, 0, 0, 0.5)"
});

export const SignInModalContainer = styled(Dialog.Content, {
  padding: "3.5rem 4.5rem",
  width: 516,

  backgroundColor: "$gray700",
  borderRadius: "$md",

  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  display: "flex",
  flexDirection: "column",
  gap: "$10",

  div: {
    display: "flex",
    flexDirection: "column",
    gap: "$4"
  },

  "@sm": {
    width: "max-content",
    padding: "3.5rem 3.5rem"
  },

  "@base": {
    width: "max-content"
  }
});

export const SignInModalTitle = styled(Dialog.Title, {
  textAlign: "center",

  color: "$gray200",
  fontSize: "$md",
  lineHeight: "$short"
});

export const SignInModalCloseButton = styled(Dialog.Close, {
  cursor: "pointer",

  position: "absolute",
  top: "1.5rem",
  right: "1.5rem"
});
