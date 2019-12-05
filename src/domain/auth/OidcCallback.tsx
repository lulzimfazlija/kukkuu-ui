import React from 'react';
import { CallbackComponent } from 'redux-oidc';
import { User } from 'oidc-client';
import { RouteChildrenProps } from 'react-router';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import userManager from './userManager';

function OidcCallback(props: RouteChildrenProps) {
  const { t } = useTranslation();

  const onSuccess = (user: User) => {
    if (user.state.path) props.history.push(user.state.path);
    else props.history.push('/profile');
  };
  const onError = (error: object) => {
    console.error('OidcCallback error');
    toast('An error occured, please try again later');
  };
  return (
    <CallbackComponent
      successCallback={onSuccess}
      errorCallback={onError}
      userManager={userManager}
    >
      <p>{t('authentication.redirect.text')}</p>
    </CallbackComponent>
  );
}

export default OidcCallback;
