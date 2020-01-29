export interface HomeFormValues {
  child: {
    birthdate: {
      day: string | number;
      month: string | number;
      year: string | number;
    };
    homeCity: string;
  };
  verifyInformation: boolean;
  childBirthdate?: string;
}

export interface HomeFormPayload {
  verifyInformation: boolean;
  child: {
    birthdate: string;
    // TODO: Give me proper type
    homeCity: string;
  };
}
