import type { Meta, StoryObj } from "@storybook/react";

import Image from "./Image";

const meta = {
  title: "Components/Image",
  component: Image,
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GridPortrait: Story = {
  args: {
    src: "https://i.1337co.de/profile/abdallah-safarini",
    alt: "some image",
    variant: "grid-portrait",
  },
};

export const RowPortrait: Story = {
  args: {
    src: "https://i.1337co.de/profile/abdallah-safarini",
    alt: "some image",
    variant: "row-portrait",
  },
};
