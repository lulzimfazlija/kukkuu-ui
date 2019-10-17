import { Record, RecordOf } from 'immutable';

export interface RegistrationFormValues {
  socialSecurityId: string;
}

export interface RegistrationProps {
  formValues: RegistrationFormValues;
}
export type RegistrationFactory = Record.Factory<RegistrationProps>;
export type RegistrationState = RecordOf<RegistrationProps>;
