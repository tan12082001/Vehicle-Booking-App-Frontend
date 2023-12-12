import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ReserveCarFrom from '../components/ReserveCars/ReserveCarForm';

const mockStore = configureMockStore();

describe('ReserveCarForm Component', () => {
  it('renders ReserveCarForm correctly', () => {
    const store = mockStore({
      reservation: {
        status: 'idle',
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ReserveCarFrom id={1} username="testuser" name="Test Car" />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByText('Car Name')).toBeInTheDocument();
    expect(screen.getByText('Select Date')).toBeInTheDocument();
    expect(screen.getByText('Select City')).toBeInTheDocument();
    expect(screen.getByText('Book Now')).toBeInTheDocument();
    expect(screen.getByDisplayValue('testuser')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test Car')).toBeInTheDocument();
  });
});
