import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('renders Card', () => {
  const props = {
  	burgers: [], 
  	setCards: ()=>{}, 
  	id: 1, 
  	votes: 5, 
  	name: 'testBurger', 
  	approved: true, 
  	active: 0
  }
  const { getByText } = render(<Card {...props} />);
  const linkElement = getByText("testBurger");
  expect(linkElement).toBeInTheDocument();
});
