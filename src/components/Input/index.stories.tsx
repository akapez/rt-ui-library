import type { Meta, StoryObj } from "@storybook/react";

import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Email: Story = {
  args: {
    type: "text",
    placeholder: "Email",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Password",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Number",
  },
};

export const Disabled: Story = {
  args: {
    type: "email",
    placeholder: "Email",
    disabled: true,
  },
};
