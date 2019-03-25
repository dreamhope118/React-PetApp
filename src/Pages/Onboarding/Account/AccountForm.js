import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'react-redux-form';
import { TextInput } from '../../../Components/FormElements';
import { Button } from '../../../Components/Button';
import { Col, Row } from '../../../Components/Layout';
import { CheckboxWithLabel } from '../../../Components/CheckboxWithLabel';
import { isEmail, passwordsMatch } from '../../../utils/validators';

const StyledForm = styled.form`
  padding-top: 30px;
`;
const TermsText = styled.p`
  margin: 0;
  color: #6A6A6A;
  font-size: 16px;
  line-height: 22px;
  padding-left: 33px;
  margin-top: -5px;
`;
const TermsLink = styled(Link)`
  color: #2384CC;
`;

const Terms = () => (
  <TermsText>
    By creating an account, I agree to PetParent’s <TermsLink to="#">Terms of Service</TermsLink> and <TermsLink to="#">Privacy Policy</TermsLink>.
  </TermsText>
)


const AccountForm = props => {
  return (
    <Form
      model="appForms.user"
      component={StyledForm}
      onSubmit={props.onSubmit}
      validators={{
        '': {
          passwordsMatch,
        },
      }}
    >
      <Row>
        <Col>
          <TextInput
            label="First Name"
            id="firstname"
            model=".firstName"
            required
          />
        </Col>
        <Col>
          <TextInput
            label="Last Name"
            id="lastname"
            model=".lastName"
            required
          />
        </Col>
      </Row>
      <Row>
        <TextInput
          label="Email Address"
          id="email"
          model=".email"
          validators={{ isEmail }}
          required
        />
      </Row>
      <Row>
        <TextInput
          label="Password"
          id="password"
          type="password"
          model=".password"
          required
          withInfo
        />
      </Row>
      <Row>
        <TextInput
          label="Confirm Password"
          id="confirm"
          type="password"
          model=".confirmPassword"
          withInfo
          required
        />
      </Row>
      <Row m="30px 0 60px">
        <CheckboxWithLabel
          label={<Terms />}
          id="terms"
          iconWrapStyles={{
            position: 'absolute',
            width: 21,
            height: 21,
          }}
          multiline
          onColor="#2384CC"
          showCheckbox
          model=".termsAccepted"
          checked={props.checked}
          required
        />
      </Row>
      <Row m="0 0 45px">
        <Button model="appForms.user" type="submit">
          Create Account
        </Button>
      </Row>
    </Form>
  );
};

AccountForm.propTypes = {
  checked: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapState = state => ({
  checked: state.appForms.user.termsAccepted,
});

export default connect(mapState)(AccountForm);