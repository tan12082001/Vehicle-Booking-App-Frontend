import '@testing-library/jest-dom/';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/store';
import SignUp from '../pages/Auth/SignUp/SignUp';

describe('SignUp component', () => {
  test('should render SignUp page', () => {
    const component = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <SignUp />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(component).toMatchSnapshot();
  });
});
