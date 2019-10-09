import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import i18n from '../../common/translation/i18n/i18nInit';
import App from './App';

function BrowserApp() {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default BrowserApp;
