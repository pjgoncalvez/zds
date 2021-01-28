import React from "react";
import { Input } from "../index";
import { colours } from "../../../components/theme";

export default {
  title: "Inputs",
  component: Input,
  argTypes: {
    disabled: {
      name: "Disabled",
      required: false,
      defaultValue: false,
      control: {
        type: "boolean",
        options: [true, false],
      },
    },
    value: {
      name: "Text",
      required: false,
      control: {
        type: "text",
      },
    },
    primaryLabel: {
      defaultValue: false,
      name: "Primary label",
      control: {
        type: "text",
      },
    },
    secondaryLabel: {
      defaultValue: false,
      name: "Secondary label",
      control: {
        type: "text",
      },
    },
    caption: {
      defaultValue: false,
      name: "Caption",
      control: {
        type: "text",
      },
    },
    placeholder: {
      name: "Placeholder",
      required: false,
      defaultValue: "Placeholder text",
      control: {
        type: "text",
      },
    },
    status: {
      name: "Status",
      required: false,
      control: {
        type: "select",
        options: ["success", "info", "warning", "error", "-"],
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
  type: "text",
};

const SimpleTextInputTemplate = (args) => <Input {...args}></Input>;

export const SimpleTextInput = SimpleTextInputTemplate.bind();
SimpleTextInput.args = {
  value: "Input Text",
  disabled: false,
  placeholder: "Placeholder text",
  status: "",
};
