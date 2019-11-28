import { ChildrenQuery_children_edges_node as GeneratedChildType } from '../../api/generatedTypes/ChildrenQuery';

export interface Child extends Partial<GeneratedChildType> {
  postalCode: string;
  // TODO: Remove me when backend actually support homeCity to single child
  homeCity: string;
}

export type Children = Child[];
