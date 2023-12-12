import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AddNewCarForm from '../pages/UserDashboard/AddNewCar/AddNewCarForm';
import store from '../redux/store';

describe('AddNewCarForm Component', () => {
  it('renders AddNewCarForm', () => {
    const component = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <AddNewCarForm />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(component).toMatchSnapshot();
  });
});
