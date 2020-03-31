/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UnenrolOccurrenceMutationInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: unenrolOccurrenceMutation
// ====================================================

export interface unenrolOccurrenceMutation_unenrolOccurrence_occurrence_event {
  /**
   * The ID of the object.
   */
  id: string;
}

export interface unenrolOccurrenceMutation_unenrolOccurrence_occurrence {
  /**
   * The ID of the object.
   */
  id: string;
  event: unenrolOccurrenceMutation_unenrolOccurrence_occurrence_event;
}

export interface unenrolOccurrenceMutation_unenrolOccurrence_child_availableEvents_edges_node {
  /**
   * The ID of the object.
   */
  id: string;
}

export interface unenrolOccurrenceMutation_unenrolOccurrence_child_availableEvents_edges {
  /**
   * The item at the end of the edge
   */
  node: unenrolOccurrenceMutation_unenrolOccurrence_child_availableEvents_edges_node | null;
}

export interface unenrolOccurrenceMutation_unenrolOccurrence_child_availableEvents {
  /**
   * Contains the nodes in this connection.
   */
  edges: (unenrolOccurrenceMutation_unenrolOccurrence_child_availableEvents_edges | null)[];
}

export interface unenrolOccurrenceMutation_unenrolOccurrence_child_enrolments_edges_node_occurrence_event {
  /**
   * The ID of the object.
   */
  id: string;
}

export interface unenrolOccurrenceMutation_unenrolOccurrence_child_enrolments_edges_node_occurrence {
  /**
   * The ID of the object.
   */
  id: string;
  event: unenrolOccurrenceMutation_unenrolOccurrence_child_enrolments_edges_node_occurrence_event;
}

export interface unenrolOccurrenceMutation_unenrolOccurrence_child_enrolments_edges_node {
  occurrence: unenrolOccurrenceMutation_unenrolOccurrence_child_enrolments_edges_node_occurrence;
}

export interface unenrolOccurrenceMutation_unenrolOccurrence_child_enrolments_edges {
  /**
   * The item at the end of the edge
   */
  node: unenrolOccurrenceMutation_unenrolOccurrence_child_enrolments_edges_node | null;
}

export interface unenrolOccurrenceMutation_unenrolOccurrence_child_enrolments {
  /**
   * Contains the nodes in this connection.
   */
  edges: (unenrolOccurrenceMutation_unenrolOccurrence_child_enrolments_edges | null)[];
}

export interface unenrolOccurrenceMutation_unenrolOccurrence_child {
  /**
   * The ID of the object.
   */
  id: string;
  availableEvents: unenrolOccurrenceMutation_unenrolOccurrence_child_availableEvents | null;
  enrolments: unenrolOccurrenceMutation_unenrolOccurrence_child_enrolments;
}

export interface unenrolOccurrenceMutation_unenrolOccurrence {
  clientMutationId: string | null;
  occurrence: unenrolOccurrenceMutation_unenrolOccurrence_occurrence | null;
  child: unenrolOccurrenceMutation_unenrolOccurrence_child | null;
}

export interface unenrolOccurrenceMutation {
  unenrolOccurrence: unenrolOccurrenceMutation_unenrolOccurrence | null;
}

export interface unenrolOccurrenceMutationVariables {
  input: UnenrolOccurrenceMutationInput;
}
