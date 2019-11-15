import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';

import personIcon from '../../../../assets/icons/svg/person.svg';
import Dropdown from '../../../../common/components/dropdown/Dropdown';
import {
  isAuthenticatedSelector,
  userSelector,
} from '../../../auth/state/AuthenticationSelectors';
import { loginTunnistamo, logoutTunnistamo } from '../../../auth/authenticate';
import { resetFormValues } from '../../../registration/state/RegistrationActions';
import { persistor } from '../../state/AppStore';

const UserDropdown: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const location = useLocation();
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
            dispatch(resetFormValues());
            // Clear user form data from redux store
            persistor.flush();
            // Flush data in redux store and localStorage
            logoutTunnistamo(location.pathname);
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
