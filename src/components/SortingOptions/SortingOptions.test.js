import React from 'react';
import { render } from '@testing-library/react';
import SortingOptions from './SortingOptions';

test('renders SortingOptions', () => {
  const { getByText } = render(<SortingOptions handleFiltering={()=>{}} active={'1'} />);
  const buttonElement = getByText(/Created/i);
  expect(buttonElement).toBeInTheDocument();
});
