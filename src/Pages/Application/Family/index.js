import React from 'react';
import { connect } from 'react-redux';
import Section from '../_components/Section';
import { NextLinkButton } from '../../../Components/NextLink';
import { Col, Row } from '../../../Components/Layout';
import { CheckboxGroup } from '../../../Components/CheckboxWithLabel';
import {
  TextInput,
  Textarea,
  Select,
} from '../../../Components/FormElements';
import { isEmail, requiredTextfield, requiredSelect } from '../../../utils/validators';
import { RowAlignEnd } from '../_components/Layout';
import { Checkbox, PhoneNumber, FormWithModel } from '../_components/FormElements';
import data from '../data';

const Family = ({
  history,
  url,
  haveChildren,
  allergic,
  alreadyHavePets,
  hadPetsInPast,
  haveVeterinarian
}) => {
  return (
    <FormWithModel model="family" pageUrl={url} history={history}>
      <Section header="Family">
        <Row>
          <CheckboxGroup header="Do you live with children?">
            <Checkbox
              id="haveKids"
              value="yes"
              label="Yes"
              multiple={false}
              model=".haveKids"
              form="family"
            />
            <Checkbox
              id="haveKids"
              value="no"
              label="No"
              multiple={false}
              model=".haveKids"
              form="family"
            />
          </CheckboxGroup>
        </Row>
        { haveChildren === 'yes' && (
          <RowAlignEnd>
            <TextInput
              model=".kidsAges"
              label="If yes, what ages?"
              required={false}
            />
          </RowAlignEnd>
        )}
        <Row>
          <CheckboxGroup header="Is anyone in the household allergic to dogs? *">
            <Checkbox
              id="allergic"
              value="yes"
              label="Yes"
              multiple={false}
              model=".allergic"
              form="family"
              required
            />
            <Checkbox
              id="allergic"
              value="no"
              label="No"
              multiple={false}
              model=".allergic"
              form="family"
              required
            />
          </CheckboxGroup>
        </Row>
        { allergic === 'yes' && (
          <RowAlignEnd>
            <Textarea
              model=".ifAllergic"
              label="If yes, how will this be managed?"
            />
          </RowAlignEnd>
        )}
      </Section>
      <Section header="Current / Past Animal History">
        <Row>
          <CheckboxGroup header="Do you currently own any pets? *">
            <Checkbox
              id="alreadyHavePets"
              value="yes"
              label="Yes"
              multiple={false}
              model=".alreadyHavePets"
              form="family"
              required
            />
            <Checkbox
              id="alreadyHavePets"
              value="no"
              label="No"
              multiple={false}
              model=".alreadyHavePets"
              form="family"
              required
            />
          </CheckboxGroup>
        </Row>
        { alreadyHavePets === 'yes' && (
          <React.Fragment>
            <RowAlignEnd>
              <TextInput
                model=".petName"
                label="Name of Pet"
                required
                validators={{
                  required: requiredTextfield,
                }}
              />
            </RowAlignEnd>
            <RowAlignEnd>
              <Col>
                <Select
                  model=".species"
                  options={data.species}
                  placeholder="Species"
                  required
                  validators={{
                    required: requiredSelect,
                  }}
                />
              </Col>
              <Col>
                <TextInput
                  model=".breed"
                  label="Breed"
                  required
                  validators={{
                    required: requiredTextfield,
                  }}
                />
              </Col>
            </RowAlignEnd>
            <RowAlignEnd>
              <Col>
                <Select
                  model=".sex"
                  options={data.sex}
                  placeholder="Sex"
                  required
                  validators={{
                    required: requiredSelect,
                  }}
                />
              </Col>
              <Col>
                <Select
                  model=".age"
                  options={data.age}
                  placeholder="Age"
                  required
                  validators={{
                    required: requiredSelect,
                  }}
                />
              </Col>
            </RowAlignEnd>
          </React.Fragment>
        )}
        <Row>
          <CheckboxGroup header="Have you owned pets in the past? *">
            <Checkbox
              id="hadPetsInPast"
              value="yes"
              label="Yes"
              multiple={false}
              model=".hadPetsInPast"
              form="family"
              required
            />
            <Checkbox
              id="hadPetsInPast"
              value="no"
              label="No"
              multiple={false}
              model=".hadPetsInPast"
              form="family"
              required
            />
          </CheckboxGroup>
        </Row>
        { hadPetsInPast === 'yes' && (
          <React.Fragment>
            <RowAlignEnd>
              <TextInput
                model=".pastPetName"
                label="Name of Pet"
                required
                validators={{
                  required: requiredTextfield,
                }}
              />
            </RowAlignEnd>
            <RowAlignEnd>
              <Col>
                <Select
                  model=".pastPetSpecies"
                  options={data.species}
                  placeholder="Species"
                  required
                  validators={{
                    required: requiredSelect,
                  }}
                />
              </Col>
              <Col>
                <TextInput
                  model=".pastPetBreed"
                  label="Breed"
                  required
                  validators={{
                    required: requiredTextfield,
                  }}
                />
              </Col>
            </RowAlignEnd>
            <RowAlignEnd>
              <Col>
                <Select
                  model=".pastPetSex"
                  options={data.sex}
                  placeholder="Sex"
                  required
                  validators={{
                    required: requiredSelect,
                  }}
                />
              </Col>
              <Col>
                <Select
                  model=".pastPetAge"
                  options={data.age}
                  placeholder="Age"
                  required
                  validators={{
                    required: requiredSelect,
                  }}
                />
              </Col>
            </RowAlignEnd>
          </React.Fragment>
        )}
        <Row>
          <CheckboxGroup header="Do you currently have a veterinarian?">
            <Checkbox
              id="haveVeterinarian"
              value="yes"
              label="Yes"
              multiple={false}
              model=".haveVeterinarian"
              form="family"
              required
            />
            <Checkbox
              id="haveVeterinarian"
              value="no"
              label="No"
              multiple={false}
              model=".haveVeterinarian"
              form="family"
              required
            />
          </CheckboxGroup>
        </Row>
      </Section>
      { haveVeterinarian === 'yes' && (
        <Section header="Veterinarian">
          <RowAlignEnd>
            <Col>
              <TextInput
                model=".vetFirstname"
                label="First Name"
                validators={{
                  required: requiredTextfield,
                }}
                required
              />
            </Col>
            <Col>
              <TextInput
                model=".vetLastname"
                label="Last Name"
                validators={{
                  required: requiredTextfield,
                }}
                required
              />
            </Col>
          </RowAlignEnd>
          <RowAlignEnd>
            <PhoneNumber model=".vetPhone" />
          </RowAlignEnd>
          <RowAlignEnd>
            <TextInput
              model=".vetEmail"
              label="Email Address"
              validators={{ isEmail, required: requiredTextfield }}
              required
            />
          </RowAlignEnd>
          <RowAlignEnd>
            <TextInput model=".vetPracticeName" label="Name of Practice" />
          </RowAlignEnd>
          <RowAlignEnd>
            <Col w="69%">
              <TextInput
                model=".vetCity"
                label="City"
                validators={{ required: requiredTextfield }}
                required
              />
            </Col>
            <Col w="31%">
              <Select
                model=".vetState"
                options={data.states}
                placeholder="State"
                required
                validators={{
                  required: requiredSelect,
                }}
              />
            </Col>
          </RowAlignEnd>
          <RowAlignEnd>
            <Col>
              <TextInput
                model=".vetZip"
                label="Zip Code"
                validators={{ required: requiredTextfield }}
                required
              />
            </Col>
            <Col>
              <Select
                model=".vetCountry"
                options={data.countries}
                placeholder="Country"
                required
                validators={{
                  required: requiredSelect,
                }}
              />
            </Col>
          </RowAlignEnd>
          <Row>
            <Checkbox
              model=".canRefVeterenarian"
              label="You may contact my veterinarian for a reference."
              labelFZ={12}
              form="family"
              id="canRefVeterenarian"
            />
          </Row>
          <RowAlignEnd>
            <Textarea model=".emergencyVetBills" label="What is your contigency plan for unexpected emergency vet bills?" />
          </RowAlignEnd>
          <Row>
            <CheckboxGroup header="Do you plan to get pet insurance?">
              <Checkbox
                id="havePetInsurance"
                value="yes"
                label="Yes"
                multiple={false}
                model=".havePetInsurance"
                form="family"
                required
              />
              <Checkbox
                id="havePetInsurance"
                value="no"
                label="No"
                multiple={false}
                model=".havePetInsurance"
                form="family"
                required
              />
            </CheckboxGroup>
          </Row>
        </Section>
      )}
      <NextLinkButton
        model="appForms.application.family"
        type="submit"
      />
    </FormWithModel>
  );
};

export default connect(state => ({
  haveChildren: state.appForms.application.family.haveKids,
  allergic: state.appForms.application.family.allergic,
  alreadyHavePets: state.appForms.application.family.alreadyHavePets,
  hadPetsInPast: state.appForms.application.family.hadPetsInPast,
  haveVeterinarian: state.appForms.application.family.haveVeterinarian,
}))(Family);