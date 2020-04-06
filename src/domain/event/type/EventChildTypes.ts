import { enrolOccurrenceMutation_enrolOccurrence_enrolment_child_enrolments as Enrolments } from '../../api/generatedTypes/enrolOccurrenceMutation';

export interface ChildEvents {
  childId: string;
  eventIds: string[];
}

export interface ChildEnrolments {
  childId: string;
  enrolments: Enrolments;
}
