import Image from "next/image";

import { BooksNotFoundContainer } from "./styles";

import notFoundIcon from "../../../../assets/not-found-magnifying-glass.png";

export function BooksNotFound() {
  return (
    <BooksNotFoundContainer>
      <Image src={notFoundIcon} width={80} height={80} alt="" quality={100} />

      <strong> Ops! Nenhum livro foi encontrado.</strong>
      <span>Tente buscar por outros títulos ou escolher outra categoria.</span>
    </BooksNotFoundContainer>
  );
}
