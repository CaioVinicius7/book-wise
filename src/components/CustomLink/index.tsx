import { ReactNode } from "react";
import { LinkProps } from "next/link";

import { CustomLinkContainer } from "./styles";

interface CustomLinkProps extends LinkProps {
  children: ReactNode;
  withHoverEffect?: boolean;
}

export function CustomLink({
  children,
  withHoverEffect = true,
  ...props
}: CustomLinkProps) {
  return (
    <CustomLinkContainer withHoverEffect={withHoverEffect} {...props}>
      {children}
    </CustomLinkContainer>
  );
}
