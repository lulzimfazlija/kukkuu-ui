import { isChildEligible } from '../notEligibleUtils';
import { SUPPORTED_START_BIRTHDATE } from '../../../../common/time/TimeConstants';
import { RegistrationFormValues } from '../../types/RegistrationTypes';

const values: RegistrationFormValues = {
  child: {
    birthdate: '2019-11-02',
    firstName: 'cfn',
    lastName: 'cln',
    homeCity: 'Helsinki',
  },
  guardian: {
    phoneNumber: '040444444',
    firstName: 'gfn',
    lastName: 'gln',
    relationship: 'Unknown',
    email: 'yomama@example.com',
  },
  agree: false,
  verifyInformation: false,
};

describe('notEligibleUtils.test.ts', () => {
  test('A random city should not be eligible', () => {
    values.child.homeCity = 'Yokohama';
    expect(isChildEligible(values)).toEqual(false);
  });
  test('Verify that all cities in REACT_APP_ELIGIBLE_CITIES are valid', () => {
    const eligibleCities: string = process.env.REACT_APP_ELIGIBLE_CITIES || '';
    const cities = eligibleCities.split(',') || [];
    cities.forEach(city => {
      values.child.homeCity = city;
      expect(isChildEligible(values)).toEqual(true);
    });
  });
  test('Verify that all cities in REACT_APP_ELIGIBLE_CITIES in uppercase are valid', () => {
    const eligibleCities: string = process.env.REACT_APP_ELIGIBLE_CITIES || '';
    const cities = eligibleCities.toUpperCase().split(',') || [];
    cities.forEach(city => {
      values.child.homeCity = city;
      expect(isChildEligible(values)).toEqual(true);
    });
  });
  test('Verify that a date too far into the past is not valid', () => {
    values.child.birthdate = '2019-10-31';
    expect(isChildEligible(values)).toEqual(false);
  });
  test('Verify that a date after supported start date is valid', () => {
    values.child.birthdate = '2019-11-11';
    expect(isChildEligible(values)).toEqual(true);
  });
});
