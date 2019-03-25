import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';
import { Control } from 'react-redux-form';

const Wrapper = styled.div`
  justify-content: flex-end;
  display: flex;
  align-items: center;
  color: ${({ color }) => color} ;
`;
const StyledLink = styled(Link)`
  font-size: 18px;
  font-weight: 800;
  margin-right: 9px;
  text-decoration: none;
  color: inherit; 
`;
const StyledButtonLink = styled(StyledLink)`
  color: #2384CC;
  margin: 0;
  padding: 5px 0;
  border: none;
  background: #fff;

  :disabled {
    color: #a2a2a2;
  }
`;

const getColor = e => e ? '#2384CC' : '#a2a2a2';

const NextLink = ({ to, enabled }) => {
  const color = getColor(enabled);
  const link = enabled ?
    <StyledLink to={to}>Next</StyledLink> :
    <StyledLink as="span">Next</StyledLink>;

  return (
    <Wrapper color={color}>
      { link } 
      <Arrow />
    </Wrapper>
  );
};

NextLink.propTypes = {
  to: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
};

export default NextLink;

export const NextLinkButton = props => {
  return (
    <Wrapper>
      <Control.button
        {...props}
        component={StyledButtonLink}
        as="button"
        disabled={({ valid }) => !valid}
      >
        <StyledLink as="span">Next</StyledLink>
        <Arrow />
      </Control.button>
    </Wrapper>
  );
};
