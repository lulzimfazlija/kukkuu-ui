/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ChildInput, GuardianInput, RelationshipType, Language } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: submitChildrenAndGuardian
// ====================================================

export interface submitChildrenAndGuardian_submitChildrenAndGuardian_children_relationship {
  type: RelationshipType | null;
}

export interface submitChildrenAndGuardian_submitChildrenAndGuardian_children {
  birthdate: any;
  firstName: string;
  lastName: string;
  postalCode: string;
  relationship: submitChildrenAndGuardian_submitChildrenAndGuardian_children_relationship | null;
}

export interface submitChildrenAndGuardian_submitChildrenAndGuardian_guardian {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  language: Language | null;
}

export interface submitChildrenAndGuardian_submitChildrenAndGuardian {
  children: (submitChildrenAndGuardian_submitChildrenAndGuardian_children | null)[] | null;
  guardian: submitChildrenAndGuardian_submitChildrenAndGuardian_guardian | null;
}

export interface submitChildrenAndGuardian {
  submitChildrenAndGuardian: submitChildrenAndGuardian_submitChildrenAndGuardian | null;
}

export interface submitChildrenAndGuardianVariables {
  children?: (ChildInput | null)[] | null;
  guardian: GuardianInput;
}
