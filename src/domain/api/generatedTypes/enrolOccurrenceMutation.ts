/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EnrolOccurrenceMutationInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: enrolOccurrenceMutation
// ====================================================

export interface enrolOccurrenceMutation_enrolOccurrence_enrolment_child {
  firstName: string;
}

export interface enrolOccurrenceMutation_enrolOccurrence_enrolment {
  child: enrolOccurrenceMutation_enrolOccurrence_enrolment_child;
}

export interface enrolOccurrenceMutation_enrolOccurrence {
  enrolment: enrolOccurrenceMutation_enrolOccurrence_enrolment | null;
}

export interface enrolOccurrenceMutation {
  enrolOccurrence: enrolOccurrenceMutation_enrolOccurrence | null;
}

export interface enrolOccurrenceMutationVariables {
  input: EnrolOccurrenceMutationInput;
}
