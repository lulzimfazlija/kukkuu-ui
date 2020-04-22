import capitalize from 'lodash/capitalize';
import sortedUniq from 'lodash/sortedUniq';

import { Child } from '../child/types/ChildTypes';
import { getEligibleCities } from '../registration/notEligible/NotEligibleUtils';
import { childByIdQuery_child as ChildByIdResponse } from '../api/generatedTypes/childByIdQuery';
import { profileQuery_myProfile_children as Children } from '../api/generatedTypes/profileQuery';

/**
 * Normalize child data from API response to a format usable by child form.
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

export const getProjectsFromProfileQuery = (children: Children) => {
  return sortedUniq(
    children?.edges?.map((child) => child?.node?.project.year).sort()
  );
};
