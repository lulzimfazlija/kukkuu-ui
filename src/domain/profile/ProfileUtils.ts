import {
  profileQuery as ProfileQueryType,
  profileQuery_myProfile_children as ProfileChildrenType,
  profileQuery_myProfile_children_edges_node as ChildType,
} from '../api/generatedTypes/profileQuery';

export const normalizeProfileData = (data: ProfileQueryType) => {
  if (
    data &&
    data.myProfile &&
    data.myProfile.children &&
    data.myProfile.children.edges &&
    data.myProfile.children.edges[0]
  ) {
    return Object.assign(data.myProfile, {
      children: normalizeChildren(data.myProfile.children),
    });
  }

  return null;
};

export const normalizeChildren = (data: ProfileChildrenType) => {
  if (!data || !data.edges) {
    return [];
  }
  const nodes = data.edges.map(edge => (edge ? edge.node : edge));
  return nodes.filter((node): node is ChildType => Boolean(node));
};
