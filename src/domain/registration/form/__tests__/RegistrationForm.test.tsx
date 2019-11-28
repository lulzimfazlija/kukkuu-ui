import React from 'react';
import { MockedProvider } from '@apollo/react-testing';

import { UnconnectedRegistrationForm } from '../RegistrationForm';
import { defaultRegistrationData } from '../../state/RegistrationReducers';
import { shallowWithProvider } from '../../../../common/test/testUtils';

it('renders snapshot correctly', () => {
  const element = shallowWithProvider(
    <MockedProvider>
      <UnconnectedRegistrationForm
        setFormValues={jest.fn()}
        initialValues={defaultRegistrationData.formValues}
      />
    </MockedProvider>
  );
  expect(element.html()).toMatchSnapshot();
});
