import type { Meta, StoryObj } from "@storybook/react";
import EmployeeView from "./EmployeeView";
import employees from "__fixtures__/employees";

const meta = {
  title: "Components/EmployeeView",
  component: EmployeeView,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    employees,
  },
} satisfies Meta<typeof EmployeeView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithGridView: Story = {
  args: {
    activeView: "grid",
  },
};

export const WithListView: Story = {
  args: {
    activeView: "list",
  },
};
