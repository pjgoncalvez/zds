import React from "react";
import Checkbox from "../Checkbox";
import { colours } from "../../theme/";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    checked: {
      name: "Checked",
      required: false,
      defaultValue: true,
      control: {
        type: "boolean",
        options: [true, false],
      },
    },
  },
  parameters: {
    backgrounds: {
      default: "white",
      values: [
        { name: "light", value: colours.light },
        { name: "dark", value: colours.dark },
        { name: "white", value: "#FFFFFF" },
      ],
    },
  },
};

const CheckboxStoryTemplate = (args) => <Checkbox {...args}></Checkbox>;

export const CheckboxStory = CheckboxStoryTemplate.bind();
CheckboxStory.args = {
  checked: false,
};
