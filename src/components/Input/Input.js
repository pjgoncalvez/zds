import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {Theme} from '../theme'
import PropTypes from "prop-types";

const StyledInput = styled.input.attrs((props) => ({
  type: props.type || "text",
  required: props.required,
}))`
  font-family: ${({ theme }) => theme.textStyles.subtitle.fontFamily};
  font-size: ${({ theme }) => theme.textStyles.subtitle.fontSize};
  color: ${({ theme }) => theme.colours.basic[800]};
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colours.basic[400]};
  background-color: ${({ theme }) => theme.colours.basic[200]};
  border-radius: ${({ theme }) => `${theme.sizes.units.tinyUnit}px`};
  min-height: ${({ theme }) => `${theme.sizes.units.basicUnit * 6}px`};
  line-height: 1.33em;
  padding: 0 ${({ theme }) => `${theme.sizes.units.basicUnit * 2}px`};
  box-shadow: none;
  box-sizing: border-box;
  margin-top: ${({ theme }) => `${theme.sizes.units.basicUnit/2}px`};
  ::placeholder,
  ::-webkit-input-placeholder,
  :-ms-input-placeholder {
    font-family: ${({ theme }) => theme.textStyles.paragraph.fontFamily};
  }

  :disabled::placeholder,
  :disabled::-webkit-input-placeholder{
    color: rgb(143 155 179 / 0.5);
  }
  :disabled:-ms-input-placeholder{
    color: rgb(143 155 179 / 0.5);
  }

  transition: all ease 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colours.primary[500]};
    box-shadow: 0 0 0 5px ${({ theme }) => theme.colours.basic[300]};
    background-color: ${({ theme }) => theme.colours.basic[100]};
  }

  &:hover:focus {
    background-color: ${({ theme }) => theme.colours.basic[100]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colours.basic[300]};
  }

  &:disabled {
    cursor: not-allowed;
    color: rgb(143 155 179 / 0.5);
    border-color: rgb(228 233 242 / 0.48);
    background-color: ${({ theme }) => theme.colours.basic[300]};
  }

  &.success-status,
  &:invalid{
    border-color: ${({ theme }) => theme.colours.success[500]};
  }
  
  &.info-status{
    border-color: ${({ theme }) => theme.colours.info[500]};
  }

  &.warning-status{
    border-color: ${({ theme }) => theme.colours.warning[500]};
  }

  &.error-status{
    border-color: ${({ theme }) => theme.colours.danger[500]};
  }

`;

const StyledInputPrimaryLabel = styled.span`
  padding-right: ${({ theme }) => `${theme.sizes.units.basicUnit * 2}px`};
  font-size: ${({ theme }) => theme.textStyles.label.fontSize};
  font-family: ${({ theme }) => theme.textStyles.label.fontFamily};
  line-height: ${({ theme }) => theme.textStyles.label.lineHeight};
  text-transform: ${({ theme }) => theme.textStyles.label.textTransform};
  color: ${({ theme }) => theme.colours.basic[600]};
`;

const StyledInputSecondayLabel = styled.span`
  padding-left: ${({ theme }) => `${theme.sizes.units.basicUnit * 2}px`};
  font-family: ${({ theme }) => theme.textStyles.caption.fontFamily};
  font-size: ${({ theme }) => theme.textStyles.label.fontSize};
  color: ${({ theme }) => theme.colours.basic[500]};
`;

const StyledInputCaption = styled.span`
  padding-top:  ${({ theme }) => `${theme.sizes.units.basicUnit * 2}px`};
  font-family: ${({ theme }) => theme.textStyles.caption.fontFamily};
  font-size: ${({ theme }) => theme.textStyles.label.fontSize};
  color: ${({ theme }) => theme.colours.basic[500]};
`;


const InputWrapper = styled.div`
  position: relative;
  display: block;
  float: left;
  padding: ${({ theme }) => `${theme.sizes.units.basicUnit * 2}px`} 0;
`;

const TopLabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: space-between;
  align-items: baseline;
`;


const Input = (props) => {
  const [valueState, setValue] = useState("");
  const [statusState, setStatus] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const { placeholder, status, value, type, disabled, primaryLabel, secondaryLabel, caption } = props;

  useEffect(() => {
    setValue(value);
  }, [value]);

  useEffect(() => {
    setStatus(status)
  }, [status]);

  return (
    <Theme>
      <InputWrapper>
        <TopLabelWrapper>
          <StyledInputPrimaryLabel>{primaryLabel ? primaryLabel : ""}</StyledInputPrimaryLabel>
          <StyledInputSecondayLabel>{secondaryLabel ? secondaryLabel : ""}</StyledInputSecondayLabel>
        </TopLabelWrapper>
        
        <StyledInput
          name=""
          id=""
          placeholder={placeholder}
          value={valueState}
          className={`${statusState}-status`}
          onChange={handleChange}
          type={type}
          disabled={disabled ? disabled : null}
        />
        {
          caption ? <StyledInputCaption>{caption}</StyledInputCaption> : null
        }
      </InputWrapper>
    </Theme>
  );
};

Input.propTypes = {};

export default Input;
