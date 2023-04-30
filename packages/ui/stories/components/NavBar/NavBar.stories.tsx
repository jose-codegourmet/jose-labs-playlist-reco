import type { Meta, StoryObj } from "@storybook/react";
import { SAMPLE_ARGS } from "../AvatarDropDownMenu/AvatarDropDownMenu.stories";
import { NavBar } from "./NavBar";
import { AvatarDropDownMenu } from "../AvatarDropDownMenu/AvatarDropDownMenu";

const meta: Meta<typeof NavBar> = {
  title: "Example/NavBar",
  component: NavBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {
    logo: "test",
    rightSideComponents: <AvatarDropDownMenu {...SAMPLE_ARGS} />,
  },
};

const SampleImageLogoNav = (
  <div className="flex items-center">
    <div className="avatar avatar-circle rounded-full">
      <div className="w-10 rounded-full bg-white">
        <img src="/spongebob.png" />
      </div>
    </div>
    <p className="text-sm p-2 font-bold">{`SPONGEBOB'S WORLD`}</p>
  </div>
);

export const ImageLogo: Story = {
  args: {
    logo: SampleImageLogoNav,
    rightSideComponents: <AvatarDropDownMenu {...SAMPLE_ARGS} />,
  },
};
