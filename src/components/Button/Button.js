import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => "auto"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  text-align: center;
  line-height: 1em;
`;

const Button = (props) => {
  const { text } = props;

  return <StyledButton {...props}>{text}</StyledButton>;
};

Button.propTypes = {};

export default Button;
