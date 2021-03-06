/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Language, RelationshipTypeEnum, EventParticipantsPerInvite } from "./globalTypes";

// ====================================================
// GraphQL query operation: profileQuery
// ====================================================

export interface profileQuery_myProfile_children_edges_node_project {
  /**
   * The ID of the object.
   */
  id: string;
  year: number;
}

export interface profileQuery_myProfile_children_edges_node_relationships_edges_node {
  /**
   * The ID of the object.
   */
  id: string;
  type: RelationshipTypeEnum | null;
}

export interface profileQuery_myProfile_children_edges_node_relationships_edges {
  /**
   * The item at the end of the edge
   */
  node: profileQuery_myProfile_children_edges_node_relationships_edges_node | null;
}

export interface profileQuery_myProfile_children_edges_node_relationships {
  /**
   * Contains the nodes in this connection.
   */
  edges: (profileQuery_myProfile_children_edges_node_relationships_edges | null)[];
}

export interface profileQuery_myProfile_children_edges_node_availableEvents_edges_node {
  /**
   * The ID of the object.
   */
  id: string;
  name: string | null;
  /**
   * In minutes
   */
  duration: number | null;
  participantsPerInvite: EventParticipantsPerInvite;
}

export interface profileQuery_myProfile_children_edges_node_availableEvents_edges {
  /**
   * The item at the end of the edge
   */
  node: profileQuery_myProfile_children_edges_node_availableEvents_edges_node | null;
}

export interface profileQuery_myProfile_children_edges_node_availableEvents {
  /**
   * Contains the nodes in this connection.
   */
  edges: (profileQuery_myProfile_children_edges_node_availableEvents_edges | null)[];
}

export interface profileQuery_myProfile_children_edges_node_occurrences_edges_node_event {
  /**
   * The ID of the object.
   */
  id: string;
  name: string | null;
}

export interface profileQuery_myProfile_children_edges_node_occurrences_edges_node {
  /**
   * The ID of the object.
   */
  id: string;
  event: profileQuery_myProfile_children_edges_node_occurrences_edges_node_event;
}

export interface profileQuery_myProfile_children_edges_node_occurrences_edges {
  /**
   * The item at the end of the edge
   */
  node: profileQuery_myProfile_children_edges_node_occurrences_edges_node | null;
}

export interface profileQuery_myProfile_children_edges_node_occurrences {
  /**
   * Contains the nodes in this connection.
   */
  edges: (profileQuery_myProfile_children_edges_node_occurrences_edges | null)[];
}

export interface profileQuery_myProfile_children_edges_node {
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  birthdate: any;
  postalCode: string;
  project: profileQuery_myProfile_children_edges_node_project;
  relationships: profileQuery_myProfile_children_edges_node_relationships;
  availableEvents: profileQuery_myProfile_children_edges_node_availableEvents | null;
  occurrences: profileQuery_myProfile_children_edges_node_occurrences;
}

export interface profileQuery_myProfile_children_edges {
  /**
   * The item at the end of the edge
   */
  node: profileQuery_myProfile_children_edges_node | null;
}

export interface profileQuery_myProfile_children {
  /**
   * Contains the nodes in this connection.
   */
  edges: (profileQuery_myProfile_children_edges | null)[];
}

export interface profileQuery_myProfile {
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  email: string | null;
  phoneNumber: string;
  language: Language;
  children: profileQuery_myProfile_children;
}

export interface profileQuery {
  myProfile: profileQuery_myProfile | null;
}
