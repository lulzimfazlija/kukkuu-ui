export interface RegistrationFormValues {
  child: {
    birthdate: string;
    firstName: string;
    lastName: string;
    homeCity: string;
  };
  guardian: {
    phoneNumber: string;
    firstName: string;
    lastName: string;
    relationship: string;
    email: string;
  };
  agree: boolean;
  verifyInformation: boolean;
}

export interface RegistrationData {
  formValues: RegistrationFormValues;
}
