import React from "react";
import { Button } from "../index";
import { colours, Theme } from "../../../components/theme";

export default {
  title: "Buttons",
  component: Button,
  argTypes: {
    text: { name: "Text", required: true },
    selectedTheme: {
      name: "Theme",
      required: false,
      defaultValue: "light",
      control: {
        type: "select",
        options: ["light", "dark", ""],
      },
    },
    size: {
      name: "Size",
      required: false,
      defaultValue: "giant",
      control: {
        type: "select",
        options: ["giant", "large", "medium", "small", "tiny"],
      },
    },
  },
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: colours.light },
        { name: "dark", value: colours.dark },
      ],
    },
  },
};

const Template = (args) => (
  <Theme>
    <Button {...args}></Button>
  </Theme>
);

export const SimpleButton = Template.bind({});
SimpleButton.args = {
  text: "Just a simple button",
  size: "giant",
  selectedTheme: "light",
};

