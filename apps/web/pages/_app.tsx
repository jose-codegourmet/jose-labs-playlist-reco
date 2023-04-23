import { AppProps } from "next/app";
import "../styles/main.scss";
import { Albert_Sans } from "next/font/google";

import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
type ReactQueryProps = {
  pageProps: {
    dehydratedState: DehydratedState;
  };
};

if (process.env.NODE_ENV === "development") {
  require("../mocks/msw.ts");
}

const fontfamily = Albert_Sans({
  weight: ["100", "200", "500", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({
  Component,
  pageProps,
}: AppProps & ReactQueryProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <div data-theme="forest" className={fontfamily.className}>
          <Component {...pageProps} />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
