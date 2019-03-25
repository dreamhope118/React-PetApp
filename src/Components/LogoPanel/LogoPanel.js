import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import BackChevron from './BackChevron';

const Wrapper = styled.div`
  margin: 0;
  width: 100%;
  border-bottom: 1px solid rgba(${({ c }) => c}, .5);
  color: rgb(${({ c }) => c});

  @media (min-width: 768px) {
    border-bottom-color: #fff;
    color: #fff;
  }
`;
const Inn = styled.div`
  text-align: center;
  padding: 16px 15px 6px;
  font: 300 24px Montserrat, Arial, sans-serif; 
  position: relative;
  margin: 0 30px;
  
  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 738px;
    color: inherit;
  }
`;
const LinkBack = styled(Link)`
  position: absolute;
  left: 0;
  top: 16px;
  width: 50px;
  text-align: left;
  color: inherit;
`;
const LogoLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const LogoPanel = ({
  location,
  staticPrevUrl,
  wrapperClassName,
  innerClassName,
  color,
}) => {
  const prevUrl = location.state ? location.state.prevUrl : staticPrevUrl;

  return (
    <Wrapper c={color} className={wrapperClassName}>
      <Inn className={innerClassName}>
        { prevUrl && <LinkBack to={prevUrl}><BackChevron /></LinkBack>}
        <LogoLink to="/">PetParent</LogoLink>
      </Inn>
    </Wrapper>
  );
};

LogoPanel.propTypes = {
  innerClassName: PropTypes.object,
  wrapperClassName: PropTypes.object,
  color: PropTypes.string,
  location: PropTypes.shape({
    state: PropTypes.shape({
      prevUrl: PropTypes.string,
    }),
  }).isRequired,
  staticPrevUrl: PropTypes.string,
};

LogoPanel.defaultProps = {
  color: '35, 132, 204',
};

export default withRouter(LogoPanel);