import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import { MockedProvider } from '@apollo/react-testing';
import { act } from 'react-dom/test-utils';

import { store } from '../state/AppStore';
import BrowserApp, { AppRoutes } from '../BrowserApp';
import App from '../App';

// Tell React not to wait for Apollo query to resolve
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateWrapper = async (wrapper: any, time = 0) => {
  await act(async () => {
    await new Promise(res => setTimeout(res, time));
    await wrapper.update();
  });
};

const wrapperCreator = (route: string) => {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <MockedProvider>
          <AppRoutes />
        </MockedProvider>
      </MemoryRouter>
    </Provider>
  );
  updateWrapper(wrapper);

  return wrapper;
};

it('renders snapshot correctly', () => {
  const tree = mount(<BrowserApp />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('redirect user from root to /fi/home by default', () => {
  const wrapper = wrapperCreator('/');
  expect(
    wrapper
      .children()
      .children()
      .props().history.location.pathname
  ).toBe('/fi/home');
});

it('user from root will be redirect to App with guarantee fi locale', () => {
  const wrapper = wrapperCreator('/');
  const app = wrapper.find(App);

  expect(app).toBeDefined();
  expect(app.props().match.params.locale).toEqual('fi');
});

it('user from supported locale will be redirect to App with that locale', () => {
  const wrapper = wrapperCreator('/en/');
  const app = wrapper.find(App);

  expect(app).toBeDefined();
  expect(app.props().match.params.locale).toEqual('en');
});

it('user from unsupported locale prefix will be redirect to route with support prefix', () => {
  const wrapper = wrapperCreator('/vi/');
  const app = wrapper.find(App);

  expect(app.props().match.params.locale).toEqual('fi');
  expect(app.props().location.pathname).toContain('/fi/vi/');
});

it('user without locale prefix will be redirect to route with support prefix', () => {
  const wrapper = wrapperCreator('/foo-url');
  const app = wrapper.find(App);

  expect(app.props().match.params.locale).toEqual('fi');
  expect(app.props().location.pathname).toContain('/fi/foo-url');
});

it('user with route with unsupport locale will be redirect to App anyway, with supported locale', () => {
  const wrapper = wrapperCreator('/dk/foo');
  const app = wrapper.find(App);

  expect(app.props().match.params.locale).toEqual('fi');
  expect(app.props().location.pathname).toContain('/fi/dk/foo');
});
