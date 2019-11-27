import { createReducer } from 'redux-starter-kit';

import { ProfileData } from '../types/ProfileTypes';
import { PROFILE_ACTIONS } from '../constants/ProfileActionConstants';

// TODO: Improve the structure of the data.
export const defaultProfileValules: ProfileData = {
  guardian: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    children: [
      {
        firstName: '',
        lastName: '',
        birthdate: '',
        postalCode: '',
        homeCity: '',
      },
    ],
  },
};

export default createReducer(defaultProfileValules, {
  [PROFILE_ACTIONS.PROFILE_TO_STORE]: (state, action) => {
    state.guardian = action.payload;
  },
});
