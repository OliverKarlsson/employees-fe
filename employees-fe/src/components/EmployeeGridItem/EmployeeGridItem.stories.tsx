import type { Meta, StoryObj } from "@storybook/react";

import EmployeeGridItem from "./EmployeeGridItem";
import Employee from "dtos/Employee";

const meta = {
  title: "Components/EmployeeGridItem",
  component: EmployeeGridItem,
  tags: ["autodocs"],
  decorators: [(story) => <ul style={{ listStyle: "none" }}>{story()}</ul>],
} satisfies Meta<typeof EmployeeGridItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const essentialEmployee: Employee = {
  name: "Abdallah Safarini",
  email: "abdallah.safarini@1337.tech",
  phoneNumber: null,
  office: null,
  manager: null,
  orgUnit: "/Employees",
  mainText: null,
  gitHub: null,
  twitter: null,
  stackOverflow: null,
  linkedIn: null,
  imagePortraitUrl: null,
  imageWallOfLeetUrl: null,
  highlighted: false,
  published: false,
  primaryRole: null,
  secondaryRole: null,
  area: null,
};

export const WithEssentialEmployee: Story = {
  args: {
    employee: essentialEmployee,
  },
};

export const WhenEmployeeHasOffice: Story = {
  args: {
    employee: { ...essentialEmployee, office: "Lund" },
  },
};

export const WhenEmployeeHasPortraitImage: Story = {
  args: {
    employee: {
      ...essentialEmployee,
      imagePortraitUrl: "https://i.1337co.de/profile/abdallah-safarini",
    },
  },
};
