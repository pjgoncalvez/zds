import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledColumn = styled.div`
    width: ${(props) =>
        props.width ? `calc((8.3333333%) * ${props.width})` : "100%"};
    color: ${(props) =>
        (props.selectedTheme == "light"
        ? props.theme.colours.dark
        : props.theme.colours.light)};
    padding: ${(props) => props.theme.dimensions.small};
    background: ${(props) => props.selectedTheme == 'dark'
        ? props.theme.colours.dark
        : props.theme.colours.light};
`;


const Column = (props) => {
    return (
        <StyledColumn {...props}>
        {props?.text}
        {props.children}
        </StyledColumn>
    );
};


Column.propTypes = {
    width: PropTypes.number,
    children: PropTypes.node,
    backgroundColor: PropTypes.string,
    selectedTheme: PropTypes.string,
};


export default Column;
