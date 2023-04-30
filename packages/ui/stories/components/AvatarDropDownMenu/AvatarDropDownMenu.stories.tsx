import react, { FC } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  AvatarDropDownMenu,
  AvatarDropDownMenuProps,
} from "./AvatarDropDownMenu";

const meta: Meta<typeof AvatarDropDownMenu> = {
  title: "Navbar/AvatarDropDownMenu",
  component: AvatarDropDownMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AvatarDropDownMenu>;

const SampleButtonTitleContent = <a className="text-primary text-lg">Sample</a>;
const SampleButtonSecondaryContent = (
  <a href="/logout" className="italic text-xs">
    logout
  </a>
);

export const SAMPLE_ARGS: AvatarDropDownMenuProps = {
  avatar: "/spongebob.png",
  buttonTitleContent: SampleButtonTitleContent,
  buttonSecondaryContent: SampleButtonSecondaryContent,
  menu: [
    {
      label: "Home",
      url: "/home",
      tag: "new",
    },
    {
      label: "About",
      url: "/about",
    },
  ],
};

export const Primary: Story = {
  args: SAMPLE_ARGS,
};
