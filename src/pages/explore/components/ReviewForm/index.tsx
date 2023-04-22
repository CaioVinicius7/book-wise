import { Rating } from "react-simple-star-rating";
import { Check, X } from "phosphor-react";

import { Avatar } from "@/components/Avatar";
import { Textarea } from "@/components/Textarea";

import {
  ReviewFormContainer,
  SubmitButton,
  ResetButton,
  FormContainer,
  ReviewFormHeader
} from "./styles";

export function ReviewForm() {
  return (
    <ReviewFormContainer>
      <ReviewFormHeader>
        <div>
          <Avatar size="md" imageUrl="http://github.com/caiovinicius7.png" />
          <strong>Caio Vinícius</strong>
        </div>

        <Rating size={24} fillColor="#8381D9" initialValue={0} />
      </ReviewFormHeader>

      <FormContainer>
        <Textarea characterLimit={450} showCounter />

        <div>
          <ResetButton type="reset" title="Excluir texto digitado">
            <X size={24} />
          </ResetButton>

          <SubmitButton type="submit">
            <Check size={24} />
          </SubmitButton>
        </div>
      </FormContainer>
    </ReviewFormContainer>
  );
}
