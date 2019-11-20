import { isChildEligible } from '../NotEligibleUtils';
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
  test('Verify that all cities in REACT_APP_ELIGIBLE_CITIES are eligible', () => {
    const eligibleCities: string = process.env.REACT_APP_ELIGIBLE_CITIES || '';
    const cities = eligibleCities.split(',') || [];
    cities.forEach(city => {
      values.child.homeCity = city;
      expect(isChildEligible(values)).toEqual(true);
    });
  });
  test('Verify that all cities in REACT_APP_ELIGIBLE_CITIES in uppercase are eligible', () => {
    const eligibleCities: string = process.env.REACT_APP_ELIGIBLE_CITIES || '';
    const cities = eligibleCities.toUpperCase().split(',') || [];
    cities.forEach(city => {
      values.child.homeCity = city;
      expect(isChildEligible(values)).toEqual(true);
    });
  });
  test('Verify that a date too far into the past is not eligible', () => {
    values.child.birthdate = '2019-10-31';
    expect(isChildEligible(values)).toEqual(false);
  });
  test('Verify that a date after supported start date is eligible', () => {
    values.child.birthdate = '2019-11-11';
    expect(isChildEligible(values)).toEqual(true);
  });
  test('Verify that an empty date is not eligible', () => {
    values.child.birthdate = '';
    expect(isChildEligible(values)).toEqual(false);
  });
  test('Verify that an invalid date is not eligible', () => {
    values.child.birthdate = 'Not so fast';
    expect(isChildEligible(values)).toEqual(false);
  });
});
