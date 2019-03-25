import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../Components/LogoPanel';
import Header from '../../Components/Header';
import Page from '../../Components/Page';
import TextInput from '../../Components/TextInput';
import Button from '../../Components/Button';
import CheckboxWithLabel from '../../Components/CheckboxWithLabel';

const Col = styled.div`
  :not(:last-child) {
    margin-right: 6px;
  }
`;
const Row = styled.div`
  display: flex;
  margin: ${({ m }) => m || '0 0 15px'};
  justify-content: space-between;
`;
const Form = styled.div`
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

const isPasswordCorrect = ({ password, confirmation }) =>
  password !== undefined && password === confirmation;

const Account = props => {
  const [ accepted, setAccepted ] = useState(false);
  const [ pass, setPass ] = useState({});
  const formValid = isPasswordCorrect(pass) && accepted;

  return (
    <Page logo={<Logo prevUrl="/welcome/special_needs" />}>
      <Header
        text={`Let’s save your\npreferences!`}
        subText="Create an account to become a PetParent"
        subStyles={{
          fontWeight: 600,
          fontSize: 16,
          letterSpacing: -0.5,
        }}
      />
      <Form>
        <Row>
          <Col>
            <TextInput label="First Name" id="firstname" />
          </Col>
          <Col>
            <TextInput label="Last Name" id="lastname" />
          </Col>
        </Row>
        <Row>
          <TextInput label="Email Address" id="email" />
        </Row>
        <Row>
          <TextInput
            label="Password"
            id="password"
            type="password"
            onChange={val => setPass({
              ...pass,
              password: val,
            })}
            withInfo
          />
        </Row>
        <Row>
          <TextInput
            label="Confirm Password"
            id="confirm"
            type="password"
            onChange={val => setPass({
              ...pass,
              confirmation: val,
            })}
            withInfo
          />
        </Row>
        <Row m="30px 0 60px">
          <CheckboxWithLabel
            label={<Terms />}
            id="terms"
            iconWrapStyles={{
              position: 'absolute',
            }}
            onColor="#2384CC"
            value={1}
            showCheckbox
            checked={accepted}
            onToggle={setAccepted}
          />
        </Row>
        <Row m="0 0 45px">
          <Button
            disabled={!formValid}
            to="/welcome/success"
          >
            Create Account
          </Button>
        </Row>
      </Form>
    </Page>
  );
};

Account.propTypes = {
  
};

export default Account;