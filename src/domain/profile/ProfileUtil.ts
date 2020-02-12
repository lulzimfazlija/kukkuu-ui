import { ProfileChild } from './type/ProfileTypes';
import { Child } from '../child/types/ChildTypes';
import { getEligibleCities } from '../registration/notEligible/NotEligibleUtils';

/**
 * Normalize reponse child data to populate to child form
 */
export const normalizeProfileChild = (profileChild: ProfileChild): Child => {
  const { relationships, ...childWithoutRelationships } = profileChild;
  const defaultHomeCity = getEligibleCities()[0];

  return {
    ...childWithoutRelationships,
    ...{
      relationship: {
        type: relationships.edges[0]?.node?.type,
      },
      homeCity: defaultHomeCity,
    },
  };
};
