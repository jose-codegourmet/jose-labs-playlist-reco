import React, { useState } from "react";
import { SessionContextProvider, useUser } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";
import type { PropsWithChildren, ReactNode } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

type AuthGuardProps = {
  pageProps: AppProps["pageProps"];
  children: ReactNode;
};

const AuthGuard = (props: AuthGuardProps) => {
  const { children, pageProps } = props;
  const user = useUser();
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  console.log("AuthGuard user == ", user);
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      {children}
    </SessionContextProvider>
  );
};

export default AuthGuard;
