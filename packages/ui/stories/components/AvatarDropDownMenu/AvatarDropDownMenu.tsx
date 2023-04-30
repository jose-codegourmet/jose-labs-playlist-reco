/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";
import type { FC } from "react";
import cn from "classnames";
import DEFAULT_AVATAR from "../../assets/user.png";

type menuItem = {
  label: string;
  url: string;
  tag?: string;
};

export interface AvatarDropDownMenuProps {
  buttonTitleContent?: string | ReactElement;
  buttonSecondaryContent: string | ReactElement;
  dropDownClassName?: string;
  menu?: menuItem[];
  avatar: string | ReactElement;
  avatarImgProps?: any;
  className?: string;
}

export const AvatarDropDownMenu: FC<AvatarDropDownMenuProps> = (props) => {
  const {
    menu,
    avatar = DEFAULT_AVATAR,
    avatarImgProps,
    className = "",
    buttonTitleContent,
    buttonSecondaryContent,
    dropDownClassName = "dropdown-content",
  } = props;
  const hasSecondaryContent = buttonTitleContent || buttonSecondaryContent;
  return (
    <div className={`dropdown ${className}`}>
      <label
        tabIndex={0}
        className={cn("btn btn-ghost rounded-full p-2 h-auto ", {
          "pr-10": hasSecondaryContent,
        })}
      >
        <div className="avatar flex-shrink-0  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <div className="w-10 rounded-full ">
            {avatar && typeof avatar === "string" ? (
              <img
                src={avatar}
                {...(avatarImgProps && { ...avatarImgProps })}
              />
            ) : (
              avatar
            )}
          </div>
        </div>

        {hasSecondaryContent && (
          <div className="flex-grow-1 flex flex-col items-start justify-center ml-5">
            {buttonTitleContent &&
              typeof buttonTitleContent == "string" &&
              buttonTitleContent.length > 0 && (
                <p className="btn-title-primary-content text-base text-primary">
                  {buttonTitleContent}
                </p>
              )}

            {buttonTitleContent &&
              typeof buttonTitleContent !== "string" &&
              buttonTitleContent}

            {buttonSecondaryContent &&
              typeof buttonSecondaryContent == "string" &&
              buttonSecondaryContent.length > 0 && (
                <p className="btn-secondary-content text-base text-primary">
                  {buttonSecondaryContent}
                </p>
              )}

            {buttonSecondaryContent &&
              typeof buttonSecondaryContent != "string" &&
              buttonSecondaryContent}
          </div>
        )}
      </label>
      {menu && menu.length > 0 && (
        <ul
          tabIndex={0}
          className={`mt-3 p-2 shadow menu menu-compact bg-base-100 rounded-box w-52 ${dropDownClassName}`}
        >
          {menu.map((m, i) => (
            <li key={`${m.label.toLowerCase().replace(" ", "-")}-${i}`}>
              <a className="justify-between">
                {m.label}
                {m.tag && <span className="badge">{m.tag}</span>}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
