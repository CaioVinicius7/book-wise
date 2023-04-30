import * as Popover from "@radix-ui/react-popover";

import { styled } from "@/styles/stitches.config";

export const MenuContainer = styled(Popover.Root, {});

export const MenuTrigger = styled(Popover.Trigger, {
  cursor: "pointer",

  display: "none",

  svg: {
    color: "$gray100"
  },

  "@md": {
    display: "flex"
  }
});

export const MenuPortal = styled(Popover.Portal, {});

export const MenuContent = styled(Popover.Content, {
  backgroundColor: "$gray700",

  marginRight: "$4",
  padding: "$5 $8",
  borderRadius: "$sm",

  boxShadow: "rgba(0, 0, 0, 0.6) 0px 5px 20px",

  display: "none",

  "@md": {
    display: "block"
  }
});

export const MenuArrow = styled(Popover.Arrow, {
  fill: "$gray700",
  width: 14,
  height: 8
});
