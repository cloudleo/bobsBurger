import React from 'react';
import { render } from '@testing-library/react';
import NewBurgerInput from './NewBurgerInput';

test('renders NewBurgerInput', () => {
	const {getByText} = render(<NewBurgerInput burgers={[]} handleFiltering={()=>{}}/>);
	const button = getByText('Save')
	expect(button).toBeInTheDocument();
});
