import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import DisplayCartCard from '../components/Card/DisplayCartCard';
import store from '../redux/store';

describe('DisplayCartCard Component', () => {
  const sampleProps = {
    id: 1,
    imgSrc: 'sample-image.jpg',
    name: 'Sample Name',
    shortNote: 'Sample Short Note',
  };

  it('renders with correct props', () => {
    const { getByText, getByAltText } = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <DisplayCartCard
              id={sampleProps.id}
              name={sampleProps.name}
              shortNote={sampleProps.shortNote}
              imgSrc={sampleProps.imgSrc}
            />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    const nameElement = getByText('Sample Name');
    expect(nameElement).toBeInTheDocument();

    const noteElement = getByText('Sample Short Note');
    expect(noteElement).toBeInTheDocument();

    const imageElement = getByAltText('Sample Name');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toContain('sample-image.jpg');
  });
});
