import { Record, RecordOf } from 'immutable';

export interface RegistrationFormValues {
  childId: string;
}

export interface RegistrationProps {
  formValues: RegistrationFormValues;
}
export type RegistrationFactory = Record.Factory<RegistrationProps>;
export type RegistrationState = RecordOf<RegistrationProps>;
