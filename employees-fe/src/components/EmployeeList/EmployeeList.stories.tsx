import type { Meta, StoryObj } from "@storybook/react";
import EmployeeList from "./EmployeeList";
import employees from "__fixtures__/employees";

const meta = {
  title: "Components/EmployeeList",
  component: EmployeeList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof EmployeeList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalList: Story = {
  args: {
    employees,
  },
};
