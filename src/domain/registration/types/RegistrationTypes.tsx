export interface RegistrationFormValues {
  child: {
    birthday: string;
    firstName: string;
    lastName: string;
    homeCity: string;
  };
  verifyInformation: boolean;
  guardian: {
    phoneNumber: string;
    firstName: string;
    lastName: string;
    relationship: string;
  };
}

export interface RegistrationData {
  formValues: RegistrationFormValues;
}
