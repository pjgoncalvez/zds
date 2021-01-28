import React from "react";
import { H1, H2, H3, H4, H5, H6 } from "../Typography";
import { colours } from "../../../components/theme";

export default {
  title: "Typography",
  component: H1,
  argTypes: {},
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

const Heading1Template = (args) => (
    <H1 {...args} />
);

export const Heading1 = Heading1Template.bind();
Heading1.args = {
  text:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
};

const Heading2Template = (args) => (
    <H2 {...args} />
);

export const Heading2 = Heading2Template.bind();
Heading2.args = {
  text:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
};
