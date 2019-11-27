import { get } from 'lodash';

import { Children } from './types/ChildTypes';

export const normalizeChildren = (children: []): Children => {
  const returnChildren: Children = children.map(edge => {
    return get(edge, 'node');
  });
  return returnChildren;
};
