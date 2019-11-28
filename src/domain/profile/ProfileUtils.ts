import { profileQuery as ProfileQueryType } from '../api/generatedTypes/profileQuery';

export const normalizeProfileData = (data: ProfileQueryType) => {
  if (
    data &&
    data.guardians &&
    data.guardians.edges[0] &&
    data.guardians.edges[0].node
  ) {
    return Object.assign(data.guardians.edges[0].node, {
      children: data.guardians.edges[0].node.children.edges,
    });
  }

  return null;
};
