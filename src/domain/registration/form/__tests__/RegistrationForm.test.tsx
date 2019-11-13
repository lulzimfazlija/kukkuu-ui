import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

import { UnconnectedRegistrationForm } from '../RegistrationForm';
import { defaultRegistrationData } from '../../state/RegistrationReducers';

it('renders snapshot correctly', () => {
  const element = shallow(
    <MockedProvider>
      <UnconnectedRegistrationForm
        setFormValues={jest.fn()}
        initialValues={defaultRegistrationData.formValues}
      />
    </MockedProvider>
  );
  expect(element.html()).toMatchSnapshot();
});
