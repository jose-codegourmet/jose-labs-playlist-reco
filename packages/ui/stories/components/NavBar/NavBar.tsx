import React, { ReactElement } from "react";
import type { FC } from "react";

export interface NavBarProps {
  logo?: string | ReactElement;
  logoUrl?: string;
  logoOnClick?: () => void;
  className?: string;
  rightSideComponents?: ReactElement;
}

export const NavBar: FC<NavBarProps> = (props) => {
  const { logo, className = "", logoOnClick, rightSideComponents } = props;

  return (
    <div className={`navbar fixed bg-black bg-opacity-50 z-[99] ${className}`}>
      <div className="container flex mx-auto p-2">
        <div className="flex-1" onClick={logoOnClick}>
          {typeof logo === "string" ? (
            <span className="normal-case text-xl">{logo}</span>
          ) : (
            logo
          )}
        </div>

        {rightSideComponents && (
          <div className="flex-none gap-2">{rightSideComponents}</div>
        )}
      </div>
    </div>
  );
};
