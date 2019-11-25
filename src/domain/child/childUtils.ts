import { get } from 'lodash';

import { Children } from './types/ChildTypes';

/*
  Temporarily for reference:
   const child: Child = {
    birthdate: data.guardians.edges[0].node.children.edges[0].node.birthdate,
    firstName: data.guardians.edges[0].node.children.edges[0].node.firstName,
    lastName: data.guardians.edges[0].node.children.edges[0].node.lastName,
    homeCity: '',
  };
*/

export const normalizeChildren = (children: []): Children => {
  const returnChildren: Children = children.map(edge => {
    return get(edge, 'node');
  });
  return returnChildren;
};
