import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import personIcon from '../../../../assets/icons/svg/person.svg';
import Dropdown from '../../../../common/components/dropdown/Dropdown';
import {
  isAuthenticatedSelector,
  userSelector,
} from '../../../auth/state/AuthenticationSelectors';
import { loginTunnistamo, logoutTunnistamo } from '../../../auth/authenticate';
import { resetFormValues } from '../../../registration/state/RegistrationActions';
import { persistor } from '../../state/AppStore';
import { clearProfile } from '../../../profile/state/ProfileActions';
import { resetBackendAuthentication } from '../../../auth/state/BackendAuthenticationActions';

const UserDropdown: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const dispatch = useDispatch();
  const userData = useSelector(userSelector);

  const dropdownOptions = isAuthenticated
    ? [
        {
          label: (userData && userData.profile.email) || '',
          icon: personIcon,
        },
        {
          label: t('navbar.profileDropdown.openCityProfile.text'),
        },
        {
          label: t('authentication.logout.text'),
          onClick: () => {
            // Clear user form data
            dispatch(resetFormValues());
            // Clear profile (fetched from API)
            dispatch(clearProfile());
            // Clear backend auth data
            dispatch(resetBackendAuthentication());
            // Flush data in redux store and localStorage
            persistor.flush();
            logoutTunnistamo();
          },
        },
      ]
    : [
        {
          label: t('authentication.login.text'),
          onClick: () => loginTunnistamo(),
        },
      ];
  return <Dropdown options={dropdownOptions} />;
};

export default UserDropdown;
