import { AppProps } from "next/app";
import "../styles/main.scss";
import { Albert_Sans } from "next/font/google";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import {
  SessionContextProvider,
  Session,
  useUser,
  useSession,
} from "@supabase/auth-helpers-react";

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

type MyAppProps = AppProps &
  ReactQueryProps & {
    initialSession: Session;
  };

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: MyAppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <div data-theme={randomTheme} className={fontfamily.className}>
            <Component {...pageProps} />
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </SessionContextProvider>
  );
}
