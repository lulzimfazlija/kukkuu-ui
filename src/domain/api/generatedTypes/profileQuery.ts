/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: profileQuery
// ====================================================

export interface profileQuery_guardians_edges_node_children_edges_node {
  __typename: "ChildMutationOutputNode";
  firstName: string;
  lastName: string;
  birthdate: any;
}

export interface profileQuery_guardians_edges_node_children_edges {
  __typename: "ChildMutationOutputNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: profileQuery_guardians_edges_node_children_edges_node | null;
}

export interface profileQuery_guardians_edges_node_children {
  __typename: "ChildMutationOutputNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (profileQuery_guardians_edges_node_children_edges | null)[];
}

export interface profileQuery_guardians_edges_node {
  __typename: "GuardianNode";
  firstName: string;
  lastName: string;
  children: profileQuery_guardians_edges_node_children;
}

export interface profileQuery_guardians_edges {
  __typename: "GuardianNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: profileQuery_guardians_edges_node | null;
}

export interface profileQuery_guardians {
  __typename: "GuardianNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (profileQuery_guardians_edges | null)[];
}

export interface profileQuery {
  guardians: profileQuery_guardians | null;
}
