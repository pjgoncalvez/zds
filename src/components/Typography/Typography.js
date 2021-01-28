import React from "react";
import { Theme } from "../theme";
import PropTypes from "prop-types";
import styled from "styled-components";

/* H1 */
const Heading1 = styled.h1`
  font-size: ${(props) => props.theme.textStyles.h1.fontSize};
`;

const H1 = (props) => {
  const { text } = props;

  return (
    <Theme>
      <Heading1 {...props}>{text}</Heading1>
    </Theme>
  );
};

H1.propTypes = {};


/* H2 */
const Heading2 = styled.h2`
  font-size: ${(props) => props.theme.textStyles.h2.fontSize};
`;

const H2 = (props) => {
  const { text } = props;

  return (
    <Theme>
      <Heading2 {...props}>{text}</Heading2>
    </Theme>
  );
};

H2.propTypes = {};


/* H3 */
const Heading3 = styled.h3`
  font-size: ${(props) => props.theme.textStyles.h3.fontSize};
`;

const H3 = (props) => {
  const { text } = props;

  return (
    <Theme>
      <Heading3 {...props}>{text}</Heading3>
    </Theme>
  );
};

H3.propTypes = {};

/* H4 */
const Heading4 = styled.h4`
  font-size: ${(props) => props.theme.textStyles.h4.fontSize};
`;

const H4 = (props) => {
  const { text } = props;

  return (
    <Theme>
      <Heading4 {...props}>{text}</Heading4>
    </Theme>
  );
};

H4.propTypes = {};

/* H5 */
const Heading5 = styled.h5`
  font-size: ${(props) => props.theme.textStyles.h5.fontSize};
`;

const H5 = (props) => {
  const { text } = props;

  return (
    <Theme>
      <Heading5 {...props}>{text}</Heading5>
    </Theme>
  );
};

H5.propTypes = {};

/* H6 */
const Heading6 = styled.h6`
  font-size: ${(props) => props.theme.textStyles.h6.fontSize};
`;

const H6 = (props) => {
  const { text } = props;

  return (
    <Theme>
      <Heading6 {...props}>{text}</Heading6>
    </Theme>
  );
};

H6.propTypes = {};


export { H1, H2, H3, H4, H5, H6 };
