/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EnrolOccurrenceMutationInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: enrolOccurrenceMutation
// ====================================================

export interface enrolOccurrenceMutation_enrolOccurrence_enrolment_occurrence_event {
  /**
   * The ID of the object.
   */
  id: string;
}

export interface enrolOccurrenceMutation_enrolOccurrence_enrolment_occurrence_venue {
  /**
   * The ID of the object.
   */
  id: string;
}

export interface enrolOccurrenceMutation_enrolOccurrence_enrolment_occurrence {
  /**
   * The ID of the object.
   */
  id: string;
  event: enrolOccurrenceMutation_enrolOccurrence_enrolment_occurrence_event;
  venue: enrolOccurrenceMutation_enrolOccurrence_enrolment_occurrence_venue;
}

export interface enrolOccurrenceMutation_enrolOccurrence_enrolment_child_enrolments_edges_node_occurrence_event {
  /**
   * The ID of the object.
   */
  id: string;
}

export interface enrolOccurrenceMutation_enrolOccurrence_enrolment_child_enrolments_edges_node_occurrence {
  /**
   * The ID of the object.
   */
  id: string;
  event: enrolOccurrenceMutation_enrolOccurrence_enrolment_child_enrolments_edges_node_occurrence_event;
}

export interface enrolOccurrenceMutation_enrolOccurrence_enrolment_child_enrolments_edges_node {
  occurrence: enrolOccurrenceMutation_enrolOccurrence_enrolment_child_enrolments_edges_node_occurrence;
}

export interface enrolOccurrenceMutation_enrolOccurrence_enrolment_child_enrolments_edges {
  /**
   * The item at the end of the edge
   */
  node: enrolOccurrenceMutation_enrolOccurrence_enrolment_child_enrolments_edges_node | null;
}

export interface enrolOccurrenceMutation_enrolOccurrence_enrolment_child_enrolments {
  /**
   * Contains the nodes in this connection.
   */
  edges: (enrolOccurrenceMutation_enrolOccurrence_enrolment_child_enrolments_edges | null)[];
}

export interface enrolOccurrenceMutation_enrolOccurrence_enrolment_child {
  /**
   * The ID of the object.
   */
  id: string;
  enrolments: enrolOccurrenceMutation_enrolOccurrence_enrolment_child_enrolments;
}

export interface enrolOccurrenceMutation_enrolOccurrence_enrolment {
  /**
   * The ID of the object.
   */
  id: string;
  occurrence: enrolOccurrenceMutation_enrolOccurrence_enrolment_occurrence;
  child: enrolOccurrenceMutation_enrolOccurrence_enrolment_child;
}

export interface enrolOccurrenceMutation_enrolOccurrence {
  clientMutationId: string | null;
  enrolment: enrolOccurrenceMutation_enrolOccurrence_enrolment | null;
}

export interface enrolOccurrenceMutation {
  enrolOccurrence: enrolOccurrenceMutation_enrolOccurrence | null;
}

export interface enrolOccurrenceMutationVariables {
  input: EnrolOccurrenceMutationInput;
}
