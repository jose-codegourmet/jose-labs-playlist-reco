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
import Layout from "../layout/Layout";
import AuthGuard from "../wrappers/AuthGuard";

type ReactQueryProps = {
  pageProps: {
    dehydratedState: DehydratedState;
  };
};

// if (process.env.NODE_ENV === "development") {
//   require("../mocks/msw.ts");
// }

const fontfamily = Albert_Sans({
  weight: ["100", "200", "500", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

const themes = [
  "dark",
  "cupcake",
  "retro",
  "halloween",
  "forest",
  "dracula",
  "coffee",
  "luxury",
  "valentine",
  "cyberpunk",
];

//randomize themes
const randomTheme = themes[Math.floor(Math.random() * themes.length)];

type MyAppProps = AppProps & ReactQueryProps;

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: MyAppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <AuthGuard pageProps={pageProps}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <div data-theme="dark" className={fontfamily.className}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </AuthGuard>
  );
}
