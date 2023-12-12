import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Router from '../routes/routes';
import { USERS_DASHBOARD } from '../routes/routeConstants';

jest.mock('../assets/user.png', () => 'test_image.png');

const mockStore = configureMockStore();

describe('ItemDetail Page', () => {
  it('renders ItemDetail page for car ID 1', async () => {
    const store = mockStore({
      authentication: {
        authenticatedUser: {
          username: 'testuser',
        },
        status: 'succeeded',
      },
      cars: {
        cars: [
          {
            id: 1,
            name: 'Test Vehicle',
            description: 'Test Description',
            pricePerHr: 20,
            seating_capacity: 4,
            image: 'test_image.png',
          },
          {
            id: 2,
            name: 'Vehicle two',
            description: 'Vehicle two Description',
            pricePerHr: 10,
            seating_capacity: 6,
            image: 'test_image.png',
          },
        ],
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`${USERS_DASHBOARD}`]}>
          <Router />
        </MemoryRouter>
      </Provider>,
    );

    userEvent.click(screen.getByTestId('each-item-container-link-1'));
    await waitFor(() => {
      expect(screen.getByText('Test Vehicle')).toBeInTheDocument();
      expect(screen.getByText('Test Description')).toBeInTheDocument();
    });
  });
});
