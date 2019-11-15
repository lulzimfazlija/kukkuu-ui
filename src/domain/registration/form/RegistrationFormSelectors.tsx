import { createSelector } from 'reselect';

import { registrationFormDataSelector } from '../state/RegistrationSelectors';
import { userSelector } from '../../auth/state/AuthenticationSelectors';

export const initialFormDataSelector = createSelector(
  registrationFormDataSelector,
  userSelector,
  (initialFormData, userData) => {
    if (userData) {
      const newGuardian = Object.assign({}, initialFormData.guardian, {
        email: userData.profile.email,
        firstName: userData.profile.given_name,
        lastName: userData.profile.family_name,
      });
      return Object.assign({}, initialFormData, { guardian: newGuardian });
    }

    return initialFormData;
  }
);
