import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";

const LoginPage = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const session = useSession();
  console.log("[+]TEST", { user, session });

  return (
    <div
      className="h-auto min-h-screen flex items-center justify-center mx-auto"
      style={{ padding: "50px 0 100px 0" }}
    >
      <div className="w-full max-w-[500px] mx-auto">
        {!session ? (
          <Auth
            supabaseClient={supabaseClient}
            appearance={{ theme: ThemeSupa }}
            providers={["facebook", "github", "discord"]}
            theme="dark"
            socialLayout="horizontal"
            localization={{
              variables: {
                sign_in: {
                  email_label: "Email",
                  password_label: "Password",
                },
              },
            }}
          />
        ) : (
          <p>Account page will go here.</p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
