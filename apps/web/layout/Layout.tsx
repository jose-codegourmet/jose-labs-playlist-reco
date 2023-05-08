import { Button, NavBar } from "ui";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

const CreatePlaylistModal: FC = () => {
  return (
    <>
      <label htmlFor="my-modal-4" className="btn btn-primary">
        Create Playlist
      </label>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label>
    </>
  );
};

export default function Layout(props: any) {
  const { children } = props;
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  console.log("navbbar user == ", user);

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    router.push("/");
  };

  return (
    <div className="w-full relative">
      <NavBar
        logo={
          <Image
            src="/logo.svg"
            width={200}
            height={100}
            alt="Picture of the author"
          />
        }
        rightSideComponents={
          <>
            {!user ? (
              <Link className="btn btn-primary" href="/login">
                login
              </Link>
            ) : (
              <Button
                className="btn-primary"
                label="logout"
                onClick={handleLogout}
              />
            )}
            <CreatePlaylistModal />
          </>
        }
      />
      {children}
    </div>
  );
}
