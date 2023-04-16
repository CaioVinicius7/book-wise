import Image from "next/image";
import Link from "next/link";

import notFoundImage from "../../assets/404.png";

import { NotFoundContainer } from "./styles";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <Image
        src={notFoundImage}
        width={600}
        height={400}
        alt="Página não encontrada"
        quality={100}
      />

      <h1>Ops! Página não encontrada.</h1>

      <Link href="/home">Voltar ao início</Link>
    </NotFoundContainer>
  );
}
