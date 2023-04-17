import type { Meta, StoryObj } from "@storybook/react";
import EmployeeGrid from "./EmployeeGrid";
import employees from "__fixtures__/employees";

const meta = {
  title: "Components/EmployeeGrid",
  component: EmployeeGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof EmployeeGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalGrid: Story = {
  args: {
    employees,
  },
};
