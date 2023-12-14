import React from 'react';
import { render } from '@testing-library/react';
import EachReservation from 'components/MyReservations/EachReservation';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { MemoryRouter } from 'react-router-dom';

describe('EachReservation Component', () => {
  it('renders reservation details', () => {
    const reservation = {
      id: 1,
      car: { name: 'Test Car' },
      date: '2023-01-01',
      city: 'Test City',
    };

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <EachReservation reservation={reservation} />
        </MemoryRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
