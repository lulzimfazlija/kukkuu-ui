/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Language, RelationshipType } from "./globalTypes";

// ====================================================
// GraphQL query operation: profileQuery
// ====================================================

export interface profileQuery_guardians_edges_node_children_edges_node_relationships_edges_node {
  type: RelationshipType | null;
}

export interface profileQuery_guardians_edges_node_children_edges_node_relationships_edges {
  /**
   * The item at the end of the edge
   */
  node: profileQuery_guardians_edges_node_children_edges_node_relationships_edges_node | null;
}

export interface profileQuery_guardians_edges_node_children_edges_node_relationships {
  /**
   * Contains the nodes in this connection.
   */
  edges: (profileQuery_guardians_edges_node_children_edges_node_relationships_edges | null)[];
}

export interface profileQuery_guardians_edges_node_children_edges_node {
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  birthdate: any;
  postalCode: string;
  relationships: profileQuery_guardians_edges_node_children_edges_node_relationships;
}

export interface profileQuery_guardians_edges_node_children_edges {
  /**
   * The item at the end of the edge
   */
  node: profileQuery_guardians_edges_node_children_edges_node | null;
}

export interface profileQuery_guardians_edges_node_children {
  /**
   * Contains the nodes in this connection.
   */
  edges: (profileQuery_guardians_edges_node_children_edges | null)[];
}

export interface profileQuery_guardians_edges_node {
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  email: string | null;
  phoneNumber: string;
  language: Language | null;
  children: profileQuery_guardians_edges_node_children;
}

export interface profileQuery_guardians_edges {
  /**
   * The item at the end of the edge
   */
  node: profileQuery_guardians_edges_node | null;
}

export interface profileQuery_guardians {
  /**
   * Contains the nodes in this connection.
   */
  edges: (profileQuery_guardians_edges | null)[];
}

export interface profileQuery {
  guardians: profileQuery_guardians | null;
}
