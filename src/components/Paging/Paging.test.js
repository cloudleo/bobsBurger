import React from 'react';
import { render } from '@testing-library/react';
import Paging from './Paging';

test('renders Paging', () => {
  const { getByDisplayValue } = render(<Paging setIndex={()=>{}} length={4} />);
  const inputElement = getByDisplayValue('1');
  expect(inputElement).toBeInTheDocument();
});
