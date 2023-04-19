import type { Meta, StoryObj } from "@storybook/react";
import EmployeesTool from "./EmployeesTool";
import employees from "__fixtures__/employees";

const meta = {
  title: "Components/EmployeesTool",
  component: EmployeesTool,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof EmployeesTool>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WhenSortingOnName: Story = {
  args: {
    activeFilter: "",
    activeSort: "name",
    activeView: "grid",
  },
};
export const WhenSortingOnOffice: Story = {
  args: {
    activeFilter: "",
    activeSort: "office",
    activeView: "grid",
  },
};
export const WithFilter: Story = {
  args: {
    activeFilter: "This is a filter",
    activeSort: "office",
    activeView: "grid",
  },
};
export const WithGridView: Story = {
  args: {
    activeFilter: "",
    activeSort: "office",
    activeView: "grid",
  },
};
export const WithListView: Story = {
  args: {
    activeFilter: "",
    activeSort: "office",
    activeView: "list",
  },
};
