import React from 'react';
import styled from 'styled-components';
import Logo from '../../Components/LogoPanel';
import { ParaBold } from '../../Components/Typography';
import PageComponents from '../../Components/Page';
import { ButtonLink } from '../../Components/Button';
import back from './images/dog_back@2x.jpg';

const Page = styled(PageComponents.StyledPage)`
  @media (min-width: 320px) {
    background-color: transparent;
  }
  @media (min-width: 768px) {
    background-color: #2384CC;
  }
`
const StartHeader = styled(ParaBold)`
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
  font-size: 47px;
  line-height: 49px;
  color: #fff;
  margin-top: 30px;

  @media (min-width: 768px) {
    margin-top: 0;
    color: #2384CC;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`
const BottomWrap = styled.div`
  position: absolute;
  bottom: 22px;
  left: 0;
  width: 100%;
`;
const BottomLine = styled.p`
  color: #fff;
  font: 600 14px 'Open Sans', Arial, sans-serif;
  text-align: center;
  margin: 24px 0 0;
  letter-spacing: -1px;

  @media (min-width: 768px) {
    color: #2384CC;
  }
`;
const BottomLineLink = styled.a`
  text-decoration: underline;
`;

const StartPage = () => (
  <Page>
    <BackgroundImage src={back} />
    <Logo color="255, 255, 255" />
    <PageComponents.PageInner>
      <StartHeader as="h2">{`Let’s find your\nperfect pup!`}</StartHeader>
      <BottomWrap>
        <ButtonLink to="/welcome/age">Start Quiz</ButtonLink>
        <BottomLine>Already have an account? <BottomLineLink>Login</BottomLineLink></BottomLine>
      </BottomWrap>
    </PageComponents.PageInner>
  </Page>
);

export default StartPage;