import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const StyledRow = styled.div`
  width: ${props => props.width || '100%'};
  margin: 0 -15px;
`;


const Row = (props) => {
    return (
        <StyledRow>
            {props.children}
        </StyledRow>
    );
};


Row.propTypes = {
    width: PropTypes.string,
};

export default Row;
