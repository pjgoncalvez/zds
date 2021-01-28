import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Theme} from '../theme/';

const StyledGrid = styled.div`
    width: 100%;
`;

const Grid = (props) => {
    return (
        <Theme>
            <StyledGrid {...props}>
                {props.children}
            </StyledGrid>
        </Theme>
    );
};


Grid.propTypes = {
    width: PropTypes.string,
};


export default Grid;