import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { TextareaContainer, TextareaElement, Counter } from "./styles";

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  showCounter?: boolean;
  characterLimit?: number;
}

export function Textarea({
  showCounter = false,
  characterLimit,
  ...props
}: TextareaProps) {
  const [characterCount, setCharacterCount] = useState(0);

  function changeCharacterCount(event: ChangeEvent<HTMLTextAreaElement>) {
    setCharacterCount(event.target.value.length);
  }

  return (
    <TextareaContainer>
      <TextareaElement
        maxLength={characterLimit}
        onChange={changeCharacterCount}
        showCounter={showCounter}
        {...props}
      />

      {showCounter && (
        <Counter aria-details="Contador de caracteres">
          {characterCount}/{characterLimit}
        </Counter>
      )}
    </TextareaContainer>
  );
}
