import React from 'react';
import Section from '../_components/Section';
import { Row } from '../../../Components/Layout';
import { Button, ButtonStyled } from '../../../Components/Button';
import { Checkbox, FormWithModel } from '../_components/FormElements';

const agreementLabelStyle = {
  lineHeight: '22px',
  fontSize: 16,
  paddingLeft: 33,
  marginTop: -4,
};
const agreementIconWrapStyles = {
  position: 'absolute',
  width: 18,
  height: 18,
};

const AgreementCheckbox = props => (
  <Checkbox
    {...props}
    form="agreements"
    multiline
    iconWrapStyles={agreementIconWrapStyles}
    labelStyle={agreementLabelStyle}
    required
  />
)

const Agreements = ({ history, url }) => {
  return (
    <FormWithModel model="agreements" pageUrl={url} history={history}>
      <Section header="Agreements">
        <Row m="20px 0 15px">
          <AgreementCheckbox
            model=".agreeForVisit"
            id="agreeForVisit"
            label="I agree to a home visit prior to being approved for adoption, if required."
          />
        </Row>
        <Row>
          <AgreementCheckbox
            model=".agreeForFee"
            id="agreeForFee"
            label="I agree to pay the adoption fee stated on the dog’s profile page when the adoption is approved by me and the rescue."
          />
        </Row>
        <Row m="25px 0 15px">
          <Button model="appForms.application.agreements" small>
            Complete Application
          </Button>
        </Row>
        <Row>
          <ButtonStyled secondary small noShadow>
            Save for later
          </ButtonStyled>
        </Row>
      </Section>
    </FormWithModel>
  );
};

export default Agreements;