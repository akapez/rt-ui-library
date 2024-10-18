import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from ".";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    label: "Accept terms and conditions",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    label: "Accept terms and conditions",
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: "Accept terms and conditions",
  },
};
