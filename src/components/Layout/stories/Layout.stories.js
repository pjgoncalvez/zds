import React from "react";
import { Row, Column, Grid } from "../../Layout";
import { colours, Theme } from "../../theme";

export default {
  title: "Basic Column",
  component: Column,
  argTypes: {
    width: {
      description: "Expects a integer value [1-12]",
      type: {
        name: "number",
        required: false,
      },
      defaultValue: 12,
      control: {
        type: "range",
        min: 1,
        max: 12,
        step: 1,
      },
    },
    text: { name: "text", required: false },
    selectedTheme: {
      name: "Theme",
      required: false,
      defaultValue: "light",
      control: {
        type: "select",
        options: ["light", "dark", ""],
      },
    },
    backgroundColor: {
      name: "Custom background color",
      control: "color",
    },
    children: {
      table: {
        disable: true,
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
    <Grid>
      <Row>
        <Column {...args}>
          <h2>hello</h2>
        </Column>
      </Row>
    </Grid>
  </Theme>
);

export const SingleColumn = Template.bind({});
SingleColumn.args = {
  width: 12,
  text: "Vivamus nizzle maurizzle my shizz tellivizzle i'm in the shizzle",
  backgroundColor: "#F6F5DF",
  selectedTheme: "light",
};
