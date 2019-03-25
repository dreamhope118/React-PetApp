import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Section from '../_components/Section';
import { Col, Row } from '../../../Components/Layout';
import { Button } from '../../../Components/Button';
import {
  TextInput,
  Select,
} from '../../../Components/FormElements';
import { Para } from '../../../Components/Typography';
import { isEmail, requiredSelect } from '../../../utils/validators';
import { Checkbox, PhoneNumber, FormWithModel } from '../_components/FormElements';
import data from '../data';

const StyledPlusButton = styled.button`
  display: flex;
  align-items: center;
  color: #2384CC;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  border: none;
  background: #fff;
`;
const PlusIco = styled.div`
  position: relative;
  background-color: #2384CC;
  width: 27px;
  height: 27px;
  margin-left: 5px;

  ::after {
    content: '+';
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    font: 700 19px 'Open Sans', Arial, sans-serif;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
`;

const PlusButton = props => (
  <StyledPlusButton {...props}>
    Add <PlusIco />
  </StyledPlusButton>
);

const getSavedRefsAmount = (refs = {}) =>
  Object.keys(refs).reduce((acc, key) => {
    const matched = key.match(/^ref\d/);
    if (!matched) return acc;
    if (acc.indexOf(matched[0]) !== -1) return acc;

    acc.push(matched[0])
    return acc;
  }, [])

const Reference = ({ history, url, savedRefsAmount }) => {
  console.log(savedRefsAmount);
  const [ refsAmount, setRefsAmount ] = useState(savedRefsAmount || 1);
  const refs = Array(refsAmount).fill(1)
  const canAddMore = refsAmount < 3;

  return (
    <FormWithModel model="reference" pageUrl={url} history={history}>
      <Para style={{
        marginTop: -20,
        fontWeight: '800',
        lineHeight: '30px',
        fontSize: 24,
        letterSpacing: -1,
      }}>Please add 3 references.</Para>
      {
        refs.map((_, i) => (
          <Section header={`Reference #${i + 1}`} key={i}>
            <Row>
              <Col>
                <TextInput model={`.ref${i+1}FirstName`} label="First Name" required />
              </Col>
              <Col>
                <TextInput model={`.ref${i+1}LastName`} label="Last Name" required />
              </Col>
            </Row>
            <Row>
              <PhoneNumber model={`.ref${i+1}Phone`} />
            </Row>
            <Row>
              <TextInput
                model={`.ref${i+1}Email`}
                label="Email Address"
                validators={{ isEmail }}
                required
              />
            </Row>
            <Row>
              <Select
                model={`.ref${i+1}Relation`}
                options={data.refRelations}
                placeholder="Relationship"
                required
                validators={{
                  required: requiredSelect,
                }}
              />
            </Row>
          </Section>
        ))
      }
      {
        canAddMore && (
        <Row jc="flex-end" m="20px 0 15px">
          <PlusButton onClick={() => {
            const next = refsAmount + 1;

            if (next > 3) return;
            setRefsAmount(next);
          }}/>
        </Row>
      )}
      <Row m="40px 0 0">
        <Checkbox
          model=".canContactRefs"
          label="You may contact my references."
          labelFZ={18}
          form="reference"
          id="canContactRefs"
        />
      </Row>
      <Row m="28px 0">
        <Button model="appForms.application.reference">
          Submit References
        </Button>
      </Row>
    </FormWithModel>
  );
};

const mapState = state => ({
  savedRefsAmount: getSavedRefsAmount(state.appForms.application.reference).length
})

export default connect(mapState)(Reference);
