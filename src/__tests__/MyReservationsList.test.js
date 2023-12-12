import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MyReservations from '../pages/LandingPage/MyReservation/MyReservation';

const mockStore = configureMockStore();

describe('MyReservations Component', () => {
  it('renders reservations present', () => {
    const store = mockStore({
      authentication: {
        authenticatedUser: {
          username: 'testuser',
        },
        status: 'succeeded',
      },
      reservation: {
        reservations: [
          {
            date: '2023-10-10',
            city: 'City A',
          },
          {
            date: '2022-11-11',
            city: 'City B',
          },
        ],
      },
    });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <MyReservations />
        </MemoryRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
