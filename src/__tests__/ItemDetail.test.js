import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; // Change to BrowserRouter
import store from '../redux/store';
import DisplayItemCard from '../components/Card/DisplayItemCard';

jest.mock('../assets/user.png', () => 'sample-image.png');

describe('DisplayItemCard Component', () => {
  const sampleProps = {
    id: 1,
    name: 'Sample Name',
    description: 'Sample Description',
    pricePerHr: 20,
    seatingCapacity: 5,
    imgSrc: 'sample-image.jpg',
    removed: false,
  };

  it('renders with correct props', () => {
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <BrowserRouter>
          {' '}
          {/* Use BrowserRouter here */}
          <DisplayItemCard
            id={sampleProps.id}
            name={sampleProps.name}
            pricePerHr={sampleProps.pricePerHr}
            description={sampleProps.description}
            seatingCapacity={sampleProps.seatingCapacity}
            imgSrc={sampleProps.imgSrc}
            removed={sampleProps.removed}
          />
        </BrowserRouter>
      </Provider>,
    );

    const nameElement = getByText('Sample Name');
    expect(nameElement).toBeInTheDocument();

    const descriptionElement = getByText('Sample Description');
    expect(descriptionElement).toBeInTheDocument();

    const imageElement = getByAltText('Sample Name');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toContain('sample-image.jpg');

    const text = getByText('Rent Price per Hour');
    expect(text).toBeInTheDocument();
  });
});
