/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RelationshipTypeEnum } from "./globalTypes";

// ====================================================
// GraphQL query operation: childByIdQuery
// ====================================================

export interface childByIdQuery_child_relationships_edges_node {
  type: RelationshipTypeEnum | null;
}

export interface childByIdQuery_child_relationships_edges {
  /**
   * The item at the end of the edge
   */
  node: childByIdQuery_child_relationships_edges_node | null;
}

export interface childByIdQuery_child_relationships {
  /**
   * Contains the nodes in this connection.
   */
  edges: (childByIdQuery_child_relationships_edges | null)[];
}

export interface childByIdQuery_child {
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  birthdate: any;
  postalCode: string;
  relationships: childByIdQuery_child_relationships;
}

export interface childByIdQuery {
  /**
   * The ID of the object
   */
  child: childByIdQuery_child | null;
}

export interface childByIdQueryVariables {
  id: string;
}
