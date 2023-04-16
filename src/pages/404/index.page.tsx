import Image from "next/image";

import { NotFoundContainer } from "./styles";
import Link from "next/link";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <Image
        src="/404.png"
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
