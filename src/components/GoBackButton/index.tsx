import { ButtonHTMLAttributes } from "react";
import { CaretLeft } from "phosphor-react";

import { GoBackButtonContainer } from "./styles";

interface GoBackButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  withText?: boolean;
}

export function GoBackButton({ withText = false, ...props }: GoBackButton) {
  return (
    <GoBackButtonContainer {...props}>
      <CaretLeft size={20} />

      {withText && "Voltar"}
    </GoBackButtonContainer>
  );
}
