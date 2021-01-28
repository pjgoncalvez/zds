import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Theme } from "../theme";
import PropTypes from "prop-types";

const CustomCheckbox = styled.input.attrs(() => ({
  type: "checkbox",
}))`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  overflow: hidden;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
  user-select: none;
`;

const CheckboxMark = styled.span`
  position: absolute;

  height: ${({ theme }) => `${theme.sizes.units.basicUnit * 2.25}px`};
  width: ${({ theme }) => `${theme.sizes.units.basicUnit * 2.25}px`};
  border: 1px solid ${({ theme }) => theme.colours.basic[500]};
  background: ${({ theme }) => theme.colours.basic[400]};
  border-radius: ${({ theme }) => `${theme.sizes.units.tinyUnit - 1}px`};

  ${({ checked }) =>
    checked &&
    css`
      background-color: green;
    `};
`;

const Checkbox = (props) => {
  const { checked } = props;
  const [isChecked, setChecked] = useState(false);
  const handleClick = () => setChecked(!isChecked);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  return (
    <Theme>
      <CheckboxLabel>
        <CustomCheckbox
          onClick={handleClick}
          checked={isChecked}
        ></CustomCheckbox>
        <CheckboxMark checked={isChecked}></CheckboxMark>
      </CheckboxLabel>
    </Theme>
  );
};

Checkbox.propTypes = {};

export default Checkbox;
