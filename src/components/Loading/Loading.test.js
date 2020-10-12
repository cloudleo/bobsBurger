import React from 'react';
import { render } from '@testing-library/react';
import Loading from './Loading';

test('renders Loading', () => {
  const { getByAltText, getByText } = render(<Loading />);
  const imageElement = getByAltText(/loading/i);
  const pElement = getByText("...........Loading");
  expect(pElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});
