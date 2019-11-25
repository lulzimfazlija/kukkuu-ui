import { ChildInput } from '../../api/generatedTypes/globalTypes';

export interface Child extends ChildInput {
  postalCode?: string;
  // TODO: Remove me when backend actually support homeCity to single child
  homeCity: string;
}

export type Children = Child[];
