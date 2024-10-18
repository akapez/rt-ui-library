import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  argTypes: {
    variant: {
      control: "select",
      type: "string",
      options: ["solid", "outline", "ghost"],
      description: "Variant of the button",
    },
    size: {
      control: "select",
      type: "string",
      options: ["sm", "md", "lg"],
      description: "Size of the button",
    },
    colorscheme: {
      control: "select",
      type: "string",
      options: ["primary", "secondary", "destructive"],
      description: "Color scheme of the button",
    },
  },
  args: {
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
    size: "md",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
    size: "md",
  },
};
