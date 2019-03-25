import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import Section from '../_components/Section';
import { NextLinkButton } from '../../../Components/NextLink';
import { Col, Row } from '../../../Components/Layout';
import {
  TextInput,
  Textarea,
  Select,
} from '../../../Components/FormElements';
import { isEmail } from '../../../utils/validators';
import { RowAlignEnd } from '../_components/Layout';
import {
  Checkbox,
  PhoneNumber,
  DateInput,
  FormWithModel
} from '../_components/FormElements';
import { requiredTextfield, requiredSelect } from '../../../utils/validators';
import data from '../data';

const appendYouModel = str => `appForms.application.you${str}`;
const getAddressModel = (isSame, m) => !isSame ? m : appendYouModel(m);
const setAddressValidity = dispatch => (e) => {
  const { checked } = e.target;
  dispatch(actions.setFieldsValidity('appForms.application.coAdopter', {
    address: checked,
    zip: checked,
    city: checked,
    country: checked,
    state: checked,
  }));
};

const CoAdopter = ({ history, url, isSameAddress, dispatch }) => {
  return (
    <FormWithModel
      model="coAdopter"
      pageUrl={url}
      history={history}
    >
      <Section header="Co-Adopter">
        <RowAlignEnd>
          <Col w="50%">
            <DateInput model=".birthday"/>
          </Col>
        </RowAlignEnd>
        <RowAlignEnd>
          <Col>
            <TextInput model=".firstname" label="First Name" required />
          </Col>
          <Col>
            <TextInput model=".lastname" label="Last Name" required />
          </Col>
        </RowAlignEnd>
        <RowAlignEnd>
          <PhoneNumber model=".phone" />
        </RowAlignEnd>
        <RowAlignEnd>
          <TextInput
            model=".email"
            label="Email Address"
            validateOn="blur"
            validators={{ isEmail }}
            required
          />
        </RowAlignEnd>
        <Row>
          <Select
            model=".relationship"
            options={data.relationship}
            placeholder="Relationship"
          />
        </Row>
      </Section>
      <Section header="Co-Adopter Address">
        <Row m="12px 0 10px">
          <Checkbox
            model=".addressIsSame"
            label="Same as mine"
            form="coAdopter"
            id="addressIsSame"
            onChange={setAddressValidity(dispatch)}
          />
        </Row>
        <RowAlignEnd>
          <TextInput
            disabled={isSameAddress}
            model={getAddressModel(isSameAddress, '.address')}
            label="Street Address"
            required
            validators={{
              required: requiredTextfield
            }}
          />
        </RowAlignEnd>
        <RowAlignEnd>
          <Col w="69%">
            <TextInput
              disabled={isSameAddress}
              model={getAddressModel(isSameAddress, '.city')}
              label="City"
              required
              validators={{
                required: requiredTextfield,
              }}
            />
          </Col>
          <Col w="31%">
            <Select
              disabled={isSameAddress}
              model={getAddressModel(isSameAddress, '.state')}
              options={data.states}
              placeholder="State"
              validators={{
                required: requiredSelect,
              }}
              required
            />
          </Col>
        </RowAlignEnd>
        <RowAlignEnd>
          <Col>
            <TextInput
              disabled={isSameAddress}
              model={getAddressModel(isSameAddress, '.zip')}
              label="Zip Code"
              validators={{
                required: requiredTextfield,
              }}
              required
            />
          </Col>
          <Col>
            <Select
              disabled={isSameAddress}
              model={getAddressModel(isSameAddress, '.country')}
              options={data.countries}
              placeholder="Country"
              validators={{
                required: requiredSelect,
              }}
              required
            />
          </Col>
        </RowAlignEnd>
      </Section>
      <Section header="Co-Adopter Employment">
        <RowAlignEnd>
          <Col>
            <TextInput model=".employmentStatus" label="Status" required />
          </Col>
          <Col>
            <Select model=".employmentYears" options={data.years} placeholder="# of Years" required />
          </Col>
        </RowAlignEnd>
        <RowAlignEnd>
          <TextInput model=".companyName" label="Company" required />
        </RowAlignEnd>
        <RowAlignEnd>
          <TextInput model=".companyAddress" label="Street Address" required />
        </RowAlignEnd>
        <RowAlignEnd>
          <Col w="69%">
            <TextInput model=".companyCity" label="City" required />
          </Col>
          <Col w="31%">
            <Select model=".companyState" options={data.states} placeholder="State" required />
          </Col>
        </RowAlignEnd>
        <RowAlignEnd>
          <Col>
            <TextInput model=".companyZip" label="Zip Code" required />
          </Col>
          <Col>
            <Select model=".companyCountry" options={data.countries} placeholder="Country" required />
          </Col>
        </RowAlignEnd>
        <RowAlignEnd>
          <Textarea
            model=".onRelationshipChange"
            label="If your relationship were to change, who would the dog remain with?"
            required
          />
        </RowAlignEnd>
      </Section>
      <NextLinkButton
        model="appForms.application.coAdopter"
        type="submit"
      />
    </FormWithModel>
  );
};

export default connect(state => ({
  isSameAddress: state.appForms.application.coAdopter.addressIsSame,
}))(CoAdopter);