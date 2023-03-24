import type { AppProps } from "next/app";
import { Nunito } from "@next/font/google";

import { globalStyles } from "@/styles/global";

const nunito = Nunito({
  variable: "--nunito-font",
  subsets: ["latin"]
});

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <div className={`${nunito.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
