import { Record, RecordOf } from 'immutable';

import { VERIFY_STATUS } from '../constants/RegistrationActionConstants';

export interface RegistrationFormValues {
  childBirthday: string;
  childHomeCity: string;
  verifyInformation: VERIFY_STATUS;
}

export interface RegistrationProps {
  formValues: RegistrationFormValues;
}
export type RegistrationFactory = Record.Factory<RegistrationProps>;
export type RegistrationState = RecordOf<RegistrationProps>;
