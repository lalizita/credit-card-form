import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import CreditCardForm from './CreditCardForm';

test('renders Credit card form', () => {
  const history = createMemoryHistory()
  const { container, getByText, debug } = render(<CreditCardForm />)

  debug()
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
