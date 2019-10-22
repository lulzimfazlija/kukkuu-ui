import { formatMessage } from '../../translation/utils';
import { newMoment } from '../../time/utils';
import {
  SUPPORTED_START_BIRTHDAY,
  DEFAULT_DATE_FORMAT,
} from '../../time/constants';

const validateBirthDay = (value: string | undefined) => {
  if (!value) {
    return formatMessage('validation.general.required');
  }

  const inputMoment = newMoment(value, DEFAULT_DATE_FORMAT);
  const nowMoment = newMoment();

  if (!inputMoment.isValid()) {
    return formatMessage('validation.date.invalidFormat');
  }

  const supportedStart = newMoment(SUPPORTED_START_BIRTHDAY);

  if (inputMoment < supportedStart || inputMoment > nowMoment) {
    return formatMessage('validation.date.nonSupported');
  }
};

export { validateBirthDay };
