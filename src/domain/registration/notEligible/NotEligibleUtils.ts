import { newMoment } from '../../../common/time/utils';
import { SUPPORTED_START_BIRTHDATE } from '../../../common/time/TimeConstants';
import { RegistrationFormValues } from '../types/RegistrationTypes';

/** isBirthdateEligible()
 * Check if child is eligible for participation.
 *
 * Only children born in 2020 is eligible for this service.
 * During development we allow dates in 2019.
 * @param {string} birthdate in YYYY-MM-DD format.
 * @returns {boolean}
 */
const isBirthdateEligible = (value: string) => {
  const inputMoment = newMoment(value, 'YYYY-MM-DD');
  const supportedStart = newMoment(SUPPORTED_START_BIRTHDATE);

  if (!inputMoment.isValid()) return false;

  if (inputMoment.isBefore(supportedStart)) {
    return false;
  }
  return true;
};

/** getEligibleCities()
 * Get an array of supported cities from .env
 * @returns {Array} Supported cities
 */
const getEligibleCities = () => {
  const eligibleCities = process.env.REACT_APP_ELIGIBLE_CITIES || 'helsinki';
  return eligibleCities.toLocaleLowerCase().split(',');
};

const isCityEligible = (city: string) => {
  const eligibleCities = getEligibleCities();
  return eligibleCities.includes(city.toLowerCase());
};

/**isChildEligible
 * Check is child is eligible for the Godchildren of Culture program
 * @param {RegistrationFormValues} values submitted from form
 * @returns {boolean} if the child is eligible
 */
const isChildEligible = (values: RegistrationFormValues) => {
  return (
    isBirthdateEligible(values.child.birthdate) &&
    isCityEligible(values.child.homeCity)
  );
};

export { getEligibleCities, isChildEligible };
