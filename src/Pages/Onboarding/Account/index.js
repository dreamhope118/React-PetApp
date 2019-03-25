import React from 'react';
import Logo from '../../../Components/LogoPanel';
import PageComponents from '../../../Components/Page';
import Header from '../_components/Header';
import AccountForm from './AccountForm';

const Account = props => (
  <PageComponents.Page logo={<Logo prevUrl="/welcome/special_needs" />}>
    <Header
      text={`Let’s save your\npreferences!`}
      subText="Create an account to become a PetParent"
      subStyles={{
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: -0.5,
      }}
    />
    <AccountForm onSubmit={() => {
      props.history.replace('/welcome/success');
    }}/>
  </PageComponents.Page>
);

Account.propTypes = {
  
};

export default Account;