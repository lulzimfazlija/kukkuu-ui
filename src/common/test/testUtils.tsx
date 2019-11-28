import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import React, { ReactElement } from 'react';

import { store } from '../../domain/app/state/AppStore';

export const mountWithProvider = (children: ReactElement) =>
  mount(<Provider store={store}>{children}</Provider>);

export const shallowWithProvider = (children: ReactElement) =>
  shallow(<Provider store={store}>{children}</Provider>);
