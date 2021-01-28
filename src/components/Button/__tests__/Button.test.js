// Button.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import { SimpleButton } from "../stories/Buttons.stories";

it("renders a default button", () => {
  render(<SimpleButton {...SimpleButton.args} />);
  expect(screen.getByRole("button")).toHaveTextContent("Just a simple button");
});

it("matches the expected snapshot", () => {
  const tree = renderer
    .create(<SimpleButton {...SimpleButton.args} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
