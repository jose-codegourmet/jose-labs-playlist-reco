import React, { ReactElement } from "react";
import type { FC } from "react";
import Link from "next/link";

export interface NavBarProps {
  logo?: string | ReactElement;
  logoUrl?: string;
  className?: string;
  rightSideComponents?: ReactElement;
}

export const NavBar: FC<NavBarProps> = (props) => {
  const { logo, className = "", rightSideComponents } = props;

  return (
    <div className={`navbar fixed base-300 bg-opacity-50 z-[99] ${className}`}>
      <div className="container flex mx-auto p-2">
        <div className="flex-1">
          <Link href="/">
            {typeof logo === "string" ? (
              <span className="normal-case text-xl">{logo}</span>
            ) : (
              logo
            )}
          </Link>
        </div>

        {rightSideComponents && (
          <div className="flex-none gap-2">{rightSideComponents}</div>
        )}
      </div>
    </div>
  );
};
