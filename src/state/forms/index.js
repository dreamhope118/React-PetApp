import { combineForms } from 'react-redux-form';
import user from './user';
import quiz from './quiz';

export default combineForms({
  user,
  quiz,
  application: combineForms({
    you: {
      birthdate: '',
      phone: '',
      pronoun: '',
      familyStatus: '',
      updates: true,
      haveCoAdopter: ''
    },
    coAdopter: {
      email: '',
      addressIsSame: true,
      country: '',
      state: '',
      address: '',
    },
    family: {
      vetEmail: '',
      alreadyHavePets: 'no',
      haveVeterinarian: 'yes',
      hadPetsInPast: 'yes',
      canRefVeterenarian: true,
      havePetInsurance: 'yes',
    },
    home: {
      havePool: 'yes',
      poolFenced: 'yes',
      ownership: 'rent',
      landlordAllows: 'yes',
      canContactLandlord: true,
    },
    lifestyle: {},
    agreements: {
      agreeForVisit: true,
      agreeForFee: true,
    },
    reference: {
      canContactRefs: true,
    }
  }),
}, 'appForms');
