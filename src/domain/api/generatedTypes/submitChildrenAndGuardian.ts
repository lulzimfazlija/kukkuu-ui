/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ChildInput, GuardianInput, RelationshipType, Language } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: submitChildrenAndGuardian
// ====================================================

export interface submitChildrenAndGuardian_submitChildrenAndGuardian_children_relationships_edges_node {
  type: RelationshipType | null;
}

export interface submitChildrenAndGuardian_submitChildrenAndGuardian_children_relationships_edges {
  /**
   * The item at the end of the edge
   */
  node: submitChildrenAndGuardian_submitChildrenAndGuardian_children_relationships_edges_node | null;
}

export interface submitChildrenAndGuardian_submitChildrenAndGuardian_children_relationships {
  /**
   * Contains the nodes in this connection.
   */
  edges: (submitChildrenAndGuardian_submitChildrenAndGuardian_children_relationships_edges | null)[];
}

export interface submitChildrenAndGuardian_submitChildrenAndGuardian_children {
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  birthdate: any;
  postalCode: string;
  relationships: submitChildrenAndGuardian_submitChildrenAndGuardian_children_relationships;
}

export interface submitChildrenAndGuardian_submitChildrenAndGuardian_guardian {
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  email: string | null;
  phoneNumber: string;
  language: Language | null;
}

export interface submitChildrenAndGuardian_submitChildrenAndGuardian {
  children: (submitChildrenAndGuardian_submitChildrenAndGuardian_children | null)[] | null;
  guardian: submitChildrenAndGuardian_submitChildrenAndGuardian_guardian | null;
}

export interface submitChildrenAndGuardian {
  /**
   * This is the first mutation one needs to execute to start using the service.
   * After that this mutation cannot be used anymore.
   */
  submitChildrenAndGuardian: submitChildrenAndGuardian_submitChildrenAndGuardian | null;
}

export interface submitChildrenAndGuardianVariables {
  children: ChildInput[];
  guardian: GuardianInput;
}
