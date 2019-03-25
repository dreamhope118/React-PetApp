import React from 'react';
import { connect } from 'react-redux';
import Section from '../_components/Section';
import { NextLinkButton } from '../../../Components/NextLink';
import { Col, Row } from '../../../Components/Layout';
import { CheckboxGroup } from '../../../Components/CheckboxWithLabel';
import {
  TextInput,
  Select,
} from '../../../Components/FormElements';
import { RowAlignEnd } from '../_components/Layout';
import { requiredTextfield, isEmail } from '../../../utils/validators';
import { Checkbox, PhoneNumber, FormWithModel } from '../_components/FormElements';
import data from '../data';

const Home = ({ history, url, ownership }) => {
  return (
    <FormWithModel model="home" pageUrl={url} history={history}>
      <Section header="Housing">
        <Row>
          <Select
            model=".homeKind"
            options={data.homeKind}
            placeholder="What kind of home do you have?"
            required
          />
        </Row>
        <Row>
          <CheckboxGroup header="Do you have a pool?">
            <Checkbox
              id="havePool"
              value="yes"
              label="Yes"
              multiple={false}
              model=".havePool"
              form="home"
              required
            />
            <Checkbox
              id="havePool"
              value="no"
              label="No"
              multiple={false}
              model=".havePool"
              form="home"
              required
            />
          </CheckboxGroup>
        </Row>
        <Row>
          <CheckboxGroup header="Is the pool fenced in?">
            <Checkbox
              id="poolFenced"
              value="yes"
              label="Yes"
              multiple={false}
              model=".poolFenced"
              form="home"
              required
            />
            <Checkbox
              id="poolFenced"
              value="no"
              label="No"
              multiple={false}
              model=".poolFenced"
              form="home"
              required
            />
            <Checkbox
              id="poolFenced"
              value="na"
              label="N/A"
              multiple={false}
              model=".poolFenced"
              form="home"
              required
            />
          </CheckboxGroup>
        </Row>
        <Row>
          <Select model=".yardType" options={data.yard} placeholder="Do you have a yard?" required />
        </Row>
        <Row>
          <CheckboxGroup header="Please select one of the following:">
            <Checkbox
              id="ownership"
              value="rent"
              label="Rent"
              multiple={false}
              model=".ownership"
              form="home"
              required
            />
            <Checkbox
              id="ownership"
              value="own"
              label="Own"
              multiple={false}
              model=".ownership"
              form="home"
              required
            />
          </CheckboxGroup>
        </Row>
      </Section>
      { ownership === 'rent' && (
        <Section header="Landlord Contact Information">
          <Row>
            <CheckboxGroup header="Does your landlord allow pets?">
              <Checkbox
                id="landlordAllows"
                value="yes"
                label="Yes"
                multiple={false}
                model=".landlordAllows"
                form="home"
                required
              />
              <Checkbox
                id="landlordAllows"
                value="no"
                label="No"
                multiple={false}
                model=".landlordAllows"
                form="home"
                required
              />
            </CheckboxGroup>
          </Row>
          <RowAlignEnd>
            <Col>
              <TextInput
                model=".landlordFirstName"
                label="First Name"
                required
                validators={{
                  required: requiredTextfield,
                }}
              />
            </Col>
            <Col>
              <TextInput
                model=".landlordLastName"
                label="Last Name"
                required
                validators={{
                  required: requiredTextfield,
                }}
              />
            </Col>
          </RowAlignEnd>
          <RowAlignEnd>
            <PhoneNumber
              model=".landlordPhone"
              validators={{
                required: requiredTextfield,
              }}
            />
          </RowAlignEnd>
          <RowAlignEnd>
            <TextInput
              model=".landlordEmail"
              label="Email Address"
              required
              validators={{
                required: requiredTextfield,
                isEmail,
              }}
            />
          </RowAlignEnd>
          <Row>
            <Checkbox
              model=".canContactLandlord"
              label="You may contact my landlord for approval."
              labelFZ={12}
              form="home"
              id="canContactLandlord"
            />
          </Row>
        </Section>
      )}
      <NextLinkButton
        model="appForms.application.home"
        type="submit"
      />
    </FormWithModel>
  );
};

export default connect(state => ({
  ownership: state.appForms.application.home.ownership,
}))(Home);