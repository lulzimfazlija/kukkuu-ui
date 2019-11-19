import { newMoment } from '../../time/utils';
import { DEFAULT_DATE_FORMAT } from '../../time/TimeConstants';

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
 * Validate input birth hdate. Dates in the future are not valid.
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

export { validateBirthdate, validateEqual, validateRequire };
