import React, { useState } from 'react';
import Section from '../_components/Section';
import { Col, Row } from '../../../Components/Layout';
import { NextLinkButton } from '../../../Components/NextLink';
import { CheckboxGroup } from '../../../Components/CheckboxWithLabel';
import {
  TextInput,
  Textarea,
  Select,
} from '../../../Components/FormElements';
import { RowAlignEnd } from '../_components/Layout';
import {
  Checkbox,
  PhoneNumber,
  DateInput,
  FormWithModel,
} from '../_components/FormElements';
import { requiredSelect } from '../../../utils/validators';
import data from '../data';

const You = ({ history, url, ...rest }) => {
  const [enableFundField, setEnableFundField] = useState(false);
  const [enableMilitaryField, setMilitaryField] = useState(false);

  return (
    <FormWithModel model="you" pageUrl={url} history={history}>
      <Section header="About You">
        <RowAlignEnd>
          <Select
            model=".pronoun"
            options={data.pronoun}
            placeholder="Preferred Pronoun"
          />
        </RowAlignEnd>
        <RowAlignEnd>
          <Select
            model=".familyStatus"
            options={data.familyStatus}
            placeholder="Family Status"
          />
        </RowAlignEnd>
        <RowAlignEnd>
          <Col w="50%">
            <DateInput model=".birthdate"/>
          </Col>
        </RowAlignEnd>
        <RowAlignEnd>
          <PhoneNumber model=".phone" />
        </RowAlignEnd>
        <Row m="0 0 10px">
          <Checkbox
            model=".updates"
            label="Please send text message updates to this number."
            labelFZ={12}
            form="you"
            id="updates"
          />
        </Row>
      </Section>
      <Section header="Address">
        <RowAlignEnd>
          <TextInput label="Street Address" model=".address" required />
        </RowAlignEnd>
        <RowAlignEnd>
          <Col w="69%">
            <TextInput label="City" model=".city" required />
          </Col>
          <Col w="31%">
            <Select options={data.states} model=".state" placeholder="State" required />
          </Col>
        </RowAlignEnd>
        <RowAlignEnd>
          <Col>
            <TextInput label="Zip Code" model=".zip" required />
          </Col>
          <Col>
            <Select options={data.countries} model=".country" placeholder="Country" required />
          </Col>
        </RowAlignEnd>
      </Section>
      <Section header="Employment">
        <RowAlignEnd>
          <Col>
            <Select
              options={data.employmentStatus}
              required
              model=".status"
              placeholder="Status"
              onChange={(v) => { setEnableFundField(v.value > 1) }}
              validators={{
                required: requiredSelect
              }}
            />
          </Col>
          <Col>
            <Select
              options={data.years}
              model=".years"
              placeholder="# of Years"
              required
            />
          </Col>
        </RowAlignEnd>
        <RowAlignEnd>
          <TextInput
            label="Company"
            model=".companyName"
            required
          />
        </RowAlignEnd>
        <RowAlignEnd>
          <Col w="69%">
            <TextInput
              label="City"
              model=".companyCity"
              required
            />
          </Col>
          <Col w="31%">
            <Select
              options={data.states}
              model=".companyState"
              placeholder="State"
              required
            />
          </Col>
        </RowAlignEnd>
        { enableFundField && (
          <RowAlignEnd>
            <Textarea
              model=".unemployed"
              label="If unemployed or retired, please explain how you will fund the costs of keeping the dog healthy."
              required
            />
          </RowAlignEnd>
        )}
      </Section>
      <Section header="More About You">
        <RowAlignEnd>
          <Textarea
            model=".moreAbout"
            label="Please tell us about yourself."
            required
          />
        </RowAlignEnd>
        <RowAlignEnd>
          <Textarea
            model=".idealDog"
            label="Describe your ideal dog."
            required
          />
        </RowAlignEnd>
        <RowAlignEnd>
          <Textarea
            model=".whyAdopt"
            label="Why do you want to adopt a dog."
            required
          />
        </RowAlignEnd>
        <Row m="0 0 10px">
          <CheckboxGroup header="Are you active-duty military?">
            <Checkbox
              id="militaryDuty"
              value="yes"
              label="Yes"
              multiple={false}
              model=".militaryDuty"
              form="you"
              onChange={({ target }) => setMilitaryField(target.checked)}
            />
            <Checkbox
              id="militaryDuty"
              value="no"
              label="No"
              multiple={false}
              model=".militaryDuty"
              form="you"
              onChange={({ target }) => setMilitaryField(!target.checked)}
            />
          </CheckboxGroup>
        </Row>
        { enableMilitaryField && (
          <RowAlignEnd>
            <Textarea
              model=".planForDogMilitary"
              label="If deployed, what is the plan for the dog."
              required
            />
          </RowAlignEnd>
        )}
      </Section>
      <Section header="Co-Adopter">
        <Row m="0 0 10px">
          <CheckboxGroup header="Do you have a co-adopter? *">
            <Checkbox
              id="haveCoAdopter"
              value="yes"
              label="Yes"
              multiple={false}
              model=".haveCoAdopter"
              form="you"
              required
            />
            <Checkbox
              id="haveCoAdopter"
              value="no"
              label="No"
              multiple={false}
              model=".haveCoAdopter"
              form="you"
              required
            />
          </CheckboxGroup>
        </Row>
      </Section>

      <NextLinkButton
        model="appForms.application.you"
        type="submit"
      />
    </FormWithModel>
  )
};

export default You;