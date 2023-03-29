import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Card2 from './Card2';

test('converts currency correctly', async () => {
  const { getByLabelText, getByText } = render(<Card2 />);
  
  await waitFor(() => {
    expect(getByText(/USD/i)).toBeInTheDocument();
    expect(getByLabelText(/Amount/i)).toBeInTheDocument();
  });
  
  const amountInput = getByLabelText(/Amount/i);
  const convertButton = getByText(/Convert/i);
  
  fireEvent.change(amountInput, { target: { value: '100' } });
  fireEvent.click(convertButton);
  
  await waitFor(() => {
    expect(getByText(/100 USD is (.*) BTC/i)).toBeInTheDocument();
  });
});
