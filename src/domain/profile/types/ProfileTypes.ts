import { Children } from '../../child/types/ChildTypes';
export interface GuardianValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  children: Children;
}

export interface ProfileData {
  guardian: GuardianValues;
}
