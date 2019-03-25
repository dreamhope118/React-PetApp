import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from '../../../../Components/LogoPanel';
import PageComponents from '../../../../Components/Page';
import { ParaBold } from '../../../../Components/Typography';
import Substeps from '../Substeps';
import Steps from '../Steps';

const Header = styled(ParaBold)`
  font-size: 40px;
  line-height: 49px;
  white-space: initial;
  padding-top: 5px;
  margin-bottom: 42px;
`;

const PageWithSteps = ({
  step,
  substep,
  children,
  header,
  index,
  staticPrevUrl,
}) => {
  return (
    <PageComponents.Page logo={<Logo staticPrevUrl={staticPrevUrl} />}>
      <Steps currentStep={step} />
      { header && <Header>{ header }</Header>}
      { substep && <Substeps substep={substep} index={index} /> }
      { children }
    </PageComponents.Page>
  );
};

PageWithSteps.propTypes = {
  step: PropTypes.string.isRequired,
  header: PropTypes.string,
  substep: PropTypes.string,
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  staticPrevUrl: PropTypes.string,
};

export default PageWithSteps;