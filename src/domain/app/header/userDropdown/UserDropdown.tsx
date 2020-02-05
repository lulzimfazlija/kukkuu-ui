import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import personIcon from '../../../../assets/icons/svg/person.svg';
import Dropdown from '../../../../common/components/dropdown/Dropdown';
import { isAuthenticatedSelector } from '../../../auth/state/AuthenticationSelectors';
import { profileSelector } from '../../../profile/state/ProfileSelectors';
import { loginTunnistamo, logoutTunnistamo } from '../../../auth/authenticate';
import { resetFormValues } from '../../../registration/state/RegistrationActions';
import { persistor } from '../../state/AppStore';
import { clearProfile } from '../../../profile/state/ProfileActions';
import { resetBackendAuthentication } from '../../../auth/state/BackendAuthenticationActions';
import UserMenu from '../userMenu/UserMenu';
import client from '../../../api/client';

export interface UserDropdownProps {
  isSmallScreen?: boolean;
}

const UserDropdown: React.FunctionComponent<UserDropdownProps> = ({
  isSmallScreen,
}) => {
  const { t } = useTranslation();
  const history = useHistory();
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const profileData = useSelector(profileSelector);
  const dispatch = useDispatch();

  const logout = {
    label: t('authentication.logout.text'),
    id: 'logoutButton',
    onClick: () => {
      // Clear user form data
      dispatch(resetFormValues());
      // Clear profile (fetched from API)
      dispatch(clearProfile());
      // Clear backend auth data
      dispatch(resetBackendAuthentication());
      // Flush data in redux store and localStorage
      persistor.flush();
      // Clear Apollo cache
      client.clearStore();
      // Log out
      logoutTunnistamo();
    },
  };

  const user = {
    id: 'userButton',
    label:
      (profileData && profileData.firstName) ||
      t('navbar.profileDropdown.profile.text'),
    icon: personIcon,
    skipItem: true,
  };

  const frontPage = {
    id: 'frontPageButton',
    label: t('navbar.smallScreenMenu.homepageLinkText'),
    onClick: () => history.push('/'),
  };

  const profile = {
    id: 'profileButton',
    label: t('navbar.profileDropdown.profile.text'),
    onClick: () => {
      history.push('/profile');
    },
  };

  const login = {
    id: 'loginButton',
    label: t('authentication.login.text'),
    icon: personIcon,
    onClick: () => loginTunnistamo(),
  };

  if (!isSmallScreen) {
    const dropdownOptions = isAuthenticated ? [user, profile, logout] : [login];
    return <Dropdown options={dropdownOptions} />;
  } else {
    const userMenuOptions = isAuthenticated
      ? [frontPage, profile, logout]
      : [frontPage, login];
    return <UserMenu options={userMenuOptions} />;
  }
};

export default UserDropdown;
