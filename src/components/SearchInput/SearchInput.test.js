import React from 'react';
import { render } from '@testing-library/react';
import SearchInput from './SearchInput';

test('renders SearchInput', () => {
  const { getByPlaceholderText } = render(<SearchInput setSearchValue={()=>{}} />);
  const inputElement = getByPlaceholderText(/search/i);
  expect(inputElement).toBeInTheDocument();
});
