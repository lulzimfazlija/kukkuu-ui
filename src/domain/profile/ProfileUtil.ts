import capitalize from 'lodash/capitalize';

import { Child } from '../child/types/ChildTypes';
import { getEligibleCities } from '../registration/notEligible/NotEligibleUtils';
import { childByIdQuery_child as ChildByIdResponse } from '../api/generatedTypes/childByIdQuery';

/**
 * Normalize reponse child data to populate to child form
 */
export const normalizeProfileChild = (
  profileChild: ChildByIdResponse
): Child => {
  const { relationships, ...childWithoutRelationships } = profileChild;
  const defaultHomeCity = capitalize(getEligibleCities()[0]);

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
