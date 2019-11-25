import { ChildInput } from '../../api/generatedTypes/globalTypes';

export interface Child extends ChildInput {
  postalCode?: string;
  homeCity: string;
}

export type Children = Child[];
