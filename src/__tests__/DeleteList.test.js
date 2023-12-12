import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import DeleteList from '../components/DeleteCars/DeleteList';

const mockStore = configureMockStore();

describe('DeleteList Component', () => {
  it('renders cars present to delete', () => {
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
          },
          {
            id: 2,
            name: 'Vehicle two',
          },
          {
            id: 3,
            name: 'Vehicle three',
          },
        ],
      },
    });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <DeleteList />
        </MemoryRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
