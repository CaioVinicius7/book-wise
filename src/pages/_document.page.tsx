import { Html, Head, Main, NextScript } from "next/document";

import { getCssText } from "@/styles/stitches.config";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="Book Wise" />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
