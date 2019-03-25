import React, { useState } from 'react';
import Section from '../_components/Section';
import { NextLinkButton } from '../../../Components/NextLink';
import { Row } from '../../../Components/Layout';
import {
  TextInput,
  Textarea,
  Select,
} from '../../../Components/FormElements';
import { RowAlignEnd } from '../_components/Layout';
import { FormWithModel } from '../_components/FormElements';
import { requiredTextfield, requiredSelect } from '../../../utils/validators';
import data from '../data';

const Lifestyle = ({ history, url }) => {
  const [enableBadWeatherPlan, setEnableBadWeatherPlan] = useState(false);
  return (
    <FormWithModel model="lifestyle" pageUrl={url} history={history}>
      <Section header="Dog Care">
        <Row>
          <Select
            model=".dogLive"
            options={data.dogLive}
            placeholder="Where will the dog live?"
            onChange={(v) => { setEnableBadWeatherPlan(v.value === 1) }}
            required
            validators={{
              required: requiredSelect,
            }}
          />
        </Row>
        { enableBadWeatherPlan && (
          <RowAlignEnd>
            <TextInput
              required
              model=".badWeatherPlan"
              label="If outside, what’s the plan for bad weather?"
              validators={{ required: requiredTextfield }}
            />
          </RowAlignEnd>
        )}
        <RowAlignEnd>
          <TextInput
            required
            model=".hoursLeftAlone"
            label="On a regular day, how many hours will the dog be left alone?"
            validators={{
              required: requiredTextfield,
            }}
          />
        </RowAlignEnd>
        <Row>
          <Select
            model=".whereDogAloneWillBe"
            options={data.dogAlone}
            placeholder="Where will the dog spend time alone?"
            required
            validators={{
              required: requiredSelect,
            }}
          />
        </Row>
        <RowAlignEnd>
          <Textarea
            required
            model=".walk"
            label="What hours of the day will the dog be walked on a normal day and who will be responsible for each walk?"
          />
        </RowAlignEnd>
        <RowAlignEnd>
          <Textarea
            required
            model=".howToTrain"
            label="Describe how you plan to train your new dog."
          />
        </RowAlignEnd>
        <RowAlignEnd>
          <Textarea
            required
            model=".myIssues"
            label="Describe any experience you have had with medical or behavioral issues."
          />
        </RowAlignEnd>
        <RowAlignEnd>
          <Textarea
            required
            model=".hardship"
            label="Are you willing to work through unexpected hardships with your pet and hire a trainer if need be?"
          />
        </RowAlignEnd>
        <Row>
          <Select
            model=".energyLevel"
            options={data.energyLevel}
            header="What energy level would work with your lifestyle?"
            required
            validators={{
              required: requiredSelect,
            }}
          />
        </Row>
      </Section>
      <NextLinkButton
        model="appForms.application.lifestyle"
        type="submit"
      />
    </FormWithModel>
  );
};

export default Lifestyle;