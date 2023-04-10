import { InputHTMLAttributes } from "react";
import { MagnifyingGlass } from "phosphor-react";

import { Input, SearchButton, SearchInputContainer } from "./styles";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeVariant: "header" | "body";
  onSearch: () => void;
}

export function SearchInput({
  sizeVariant,
  onSearch,
  ...props
}: SearchInputProps) {
  return (
    <SearchInputContainer sizeVariant={sizeVariant} role="search">
      <Input {...props} />

      <SearchButton onClick={onSearch}>
        <MagnifyingGlass size={20} />
      </SearchButton>
    </SearchInputContainer>
  );
}
