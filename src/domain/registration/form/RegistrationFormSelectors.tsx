import { createSelector } from 'reselect';

import { registrationFormDataSelector } from '../state/RegistrationSelectors';
import { userSelector } from '../../auth/state/AuthenticationSelectors';

export const initialFormDataSelector = createSelector(
  registrationFormDataSelector,
  userSelector,
  (formData, userData) => {
    if (userData) {
      const newGuardian = Object.assign({}, formData.guardian, {
        email: userData.profile.email,
        firstName: formData.guardian.firstName || userData.profile.given_name,
        lastName: formData.guardian.lastName || userData.profile.family_name,
      });
      return Object.assign({}, formData, { guardian: newGuardian });
    }

    return formData;
  }
);
