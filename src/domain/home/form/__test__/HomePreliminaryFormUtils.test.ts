import { RegistrationFormValues } from '../../../registration/types/RegistrationTypes';
import { HomeFormValues } from '../types/HomeFormTypes';
import { convertFormValues } from '../HomePreliminaryFormUtils';

const convertFrom: RegistrationFormValues = {
  children: [
    {
      birthdate: '2019-01-02',
      firstName: 'cfn',
      lastName: 'cln',
      homeCity: 'Helsinki',
    },
  ],
  guardian: {
    phoneNumber: '040444444',
    firstName: 'gfn',
    lastName: 'gln',
    relationship: 'TouDontWanTo know',
    email: 'yomama@example.com',
  },
  preferLanguage: 'en',
  agree: false,
  verifyInformation: false,
};

const converted: HomeFormValues = {
  child: {
    birthdate: {
      day: 2,
      month: 1,
      year: 2019,
    },
    homeCity: 'Yokohama',
  },
  verifyInformation: false,
};

describe('HomePreliminaryFormUtils', () => {
  test('Verify conversion from RegistrationFormValues to HomeFormValues', () => {
    const result: HomeFormValues = convertFormValues(convertFrom);
    expect(result).toEqual(converted);
  });
});
