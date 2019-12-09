import {
  profileQuery_myProfile as GeneratedProfile,
  profileQuery_myProfile_children_edges_node as GeneratedProfileChild,
} from '../../api/generatedTypes/profileQuery';

export interface ProfileType extends Omit<GeneratedProfile, 'children'> {
  children: GeneratedProfileChild[] | null;
}
