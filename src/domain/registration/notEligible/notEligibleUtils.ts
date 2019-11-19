import { newMoment } from '../../../common/time/utils';
import { SUPPORTED_START_BIRTHDATE } from '../../../common/time/TimeConstants';
import { RegistrationFormValues } from '../types/RegistrationTypes';

/** isBirthdateEligible()
 * Check if child is eligible for participation.
 *
 * Only children born in 2020 is eligible for this service.
 * During development we allow dates in 2019.
 * @param {string} Input value.
 * @returns {boolean}
 */
const isBirthdateEligible = (value: string) => {
  const inputMoment = newMoment(value);
  const supportedStart = newMoment(SUPPORTED_START_BIRTHDATE);

  if (inputMoment.isBefore(supportedStart)) {
    return false;
  }
  return true;
};

const isCityEligible = (city: string) => {
  let eligibleCities = process.env.REACT_APP_ELIGIBLE_CITIES;
  if (!eligibleCities) throw new Error('eligibleCities is not defined in .env');
  eligibleCities = eligibleCities.toLowerCase();
  if (eligibleCities.includes(city.toLowerCase())) return true;
  else return false;
};

const isChildEligible = (values: RegistrationFormValues) => {
  return (
    isBirthdateEligible(values.child.birthdate) &&
    isCityEligible(values.child.homeCity)
  );
};

export { isChildEligible };
