import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import React, { ReactElement } from 'react';

import { persistor, store } from '../../domain/app/state/AppStore';

export const mountWithProvider = (children: ReactElement) =>
  mount(
    <Provider store={store}>
      {' '}
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
