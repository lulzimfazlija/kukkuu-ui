import { StoreState } from '../../app/types/AppTypes';

export const childrenEventSelector = (state: StoreState) => {
  return state.event;
};
