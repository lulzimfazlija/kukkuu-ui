import { newMoment } from '../../time/utils';
import {
  SUPPORTED_START_BIRTHDATE,
  DEFAULT_DATE_FORMAT,
} from '../../time/TimeConstants';
import { RegistrationFormValues } from '../../../domain/registration/types/RegistrationTypes';

/**
 * validateRequire()
 * Check if field is required.
 * @param value
 * @param customMessage
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validateRequire = (value: any, customMessage?: string) => {
  if (!value) {
    return customMessage || 'validation.general.required';
  }
};

/** validateBirthdate()
 * Validate user input child birthdate. Dates in the future are not valid.
 * @param value Input value.
 */
const validateBirthdate = (value: string | number) => {
  const inputMoment = newMoment(value, DEFAULT_DATE_FORMAT);
  const nowMoment = newMoment();

  if (!inputMoment.isValid()) {
    return 'validation.date.invalidFormat';
  }

  if (inputMoment > nowMoment) {
    return 'validation.date.unSupported';
  }
};

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
  console.log(city);
  const error = validateEqual(
    city,
    ['Helsinki', 'Helsingfors'],
    'error shmerror'
  );
  console.log(error);
  if (error) return false;
  else return true;
};

const isChildEligible = (values: RegistrationFormValues) => {
  return (
    isBirthdateEligible(values.child.birthdate) &&
    isCityEligible(values.child.homeCity)
  );
};

/**
 * validateEqual()
 * Usually to check if user is located in supported area.
 * Can be used widely to check in many different case.
 * @param value Input value
 * @param comparedValue Value to compare
 * @param errorMessage Error message when not match
 */
const validateEqual = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  comparedValue: any,
  errorMessage: string
) => {
  let cloneValue = value;
  let cloneComparedValue = comparedValue;

  if (typeof value === 'string' && typeof comparedValue === 'string') {
    cloneValue = value.toLowerCase();
    cloneComparedValue = comparedValue.toLowerCase();
  }

  if (typeof value === 'string' && Array.isArray(comparedValue)) {
    const match = comparedValue.find(c => {
      cloneValue = typeof value === 'string' ? value.toLowerCase() : value;
      cloneComparedValue = typeof c === 'string' ? c.toLowerCase() : c;

      return cloneValue === cloneComparedValue;
    });

    if (!match) return errorMessage;
  }

  if (cloneValue !== cloneComparedValue) {
    return errorMessage;
  }
};

export { isChildEligible, validateBirthdate, validateEqual, validateRequire };
