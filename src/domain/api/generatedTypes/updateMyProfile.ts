/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UpdateMyProfileMutationInput, Language } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: updateMyProfile
// ====================================================

export interface updateMyProfile_updateMyProfile_myProfile {
  firstName: string;
  lastName: string;
  language: Language | null;
  email: string | null;
}

export interface updateMyProfile_updateMyProfile {
  myProfile: updateMyProfile_updateMyProfile_myProfile | null;
}

export interface updateMyProfile {
  updateMyProfile: updateMyProfile_updateMyProfile | null;
}

export interface updateMyProfileVariables {
  input: UpdateMyProfileMutationInput;
}
