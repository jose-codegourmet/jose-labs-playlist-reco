import { Button, NavBar } from "ui";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { PropsWithChildren, useState } from "react";
import cn from "classnames";

export default function Layout(props: PropsWithChildren) {
  const { children } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  console.log("navbbar user == ", user);

  const avatarSrc = user?.user_metadata?.avatar_url || "./avatar.png";

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
              <div className="flex justify-start items-center">
                <Link
                  href="/dashboard/profile"
                  className="tooltip tooltip-bottom"
                  data-tip="view profile"
                >
                  <div className="avatar online ">
                    <div className="w-10 rounded-full">
                      <Image
                        src={avatarSrc}
                        alt="user profile"
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                </Link>
                <label className="btn btn-circle swap swap-rotate ml-2">
                  <input
                    type="checkbox"
                    onChange={() => setOpenMenu((openMenu) => !openMenu)}
                  />
                  <svg
                    className="swap-off fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>
                  <svg
                    className="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </svg>
                </label>
                <div
                  className={cn("dropdown dropdown-end", {
                    "dropdown-open": openMenu,
                  })}
                >
                  <ul className="dropdown-content menu p-2 mt-5 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <Link
                        href="/dashboard/profile"
                        className="flex flex-col items-start justify-start"
                      >
                        <span className="block">View Profile</span>
                        <div className="badge badge-error badge-outline">
                          update required
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/dashboard/playlists">View playlist</Link>
                    </li>
                    <li>
                      <span onClick={handleLogout}>Logout</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </>
        }
      />
      <div className="h-auto min-h-screen pt-[100px]">{children}</div>
    </div>
  );
}
