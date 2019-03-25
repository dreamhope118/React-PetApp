import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import flow from '../../flow';

const SubstepsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledSubstep = styled.span`
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 600;
  color: ${({ active }) => active ? '#2384CC' : '#A2A2A2'};
  position: relative;

  ::before {
    position: absolute;
    content: "";
    width: 100%;
    background-color: #F3F3F3;
    height: 3px;
    bottom: -10px;
    left: 0;
    display: ${({ active }) => active ? 'block' : 'none'}
  }
  ::after {
    position: absolute;
    content: "";
    width: ${({ decorWidth }) => decorWidth}
    background-color: #2384CC;
    height: 3px;
    bottom: -10px;
    left: ${({ decorOffset }) => decorOffset}%;
    display: ${({ active }) => active ? 'block' : 'none'}
  }

`;

const flowSubsteps = Object.values(flow.reduce((s, { substep }, i) => {
  if (substep && s[substep] === undefined) {
    s[substep] = {
      name: substep,
      count: 1,
    }
  } else if (s[substep]) {
    s[substep].count += 1;
  }

  return s;
}, {}));

const Substeps = ({ substep, index }) => {
  const list = flowSubsteps.map(({ name, count }, i) => {
    const subWidth = count > 1 ? 100 / count : 100;
    const subOffset = count > 1 ? index * subWidth : 0;
    
    return (
      <StyledSubstep 
        key={name}
        active={name === substep}
        decorWidth={`${subWidth}%`}
        decorOffset={subOffset}
      >
        { name }
      </StyledSubstep>
    )
  });

  return (
    <SubstepsWrap>
      { list }
    </SubstepsWrap>
  )
};

Substeps.propTypes = {
  substep: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Substeps;