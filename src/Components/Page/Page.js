import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledPage = styled.div`
  min-height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: 768px) {
    background-color: #2384CC;
    padding-bottom: 40px;
  }
`;
export const PageInner = styled.div`
  max-width: 738px;
  position: relative;
  flex: 1;
  width: 100%;
  padding: 30px;

  @media (min-width: 768px) {
    background-color: #fff;
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 5px;
    padding: 30px;
  }
`;

export const Page = ({
  header,
  logo,
  children,
}) => {
  return (
    <StyledPage>
      { logo }
      <PageInner>
        { children }
      </PageInner>
    </StyledPage>
  );
};

Page.propTypes = {
  logo: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
