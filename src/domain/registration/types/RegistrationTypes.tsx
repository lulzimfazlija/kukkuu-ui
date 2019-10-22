import { Record, RecordOf } from 'immutable';

export interface RegistrationFormValues {
  childBirthday: string;
  childHomeCity: string;
  verifyInformation: boolean;
}

export interface RegistrationProps {
  formValues: RegistrationFormValues;
}
export type RegistrationFactory = Record.Factory<RegistrationProps>;
export type RegistrationState = RecordOf<RegistrationProps>;
