import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Card1 from './Card1';

test('renders conversion rates correctly', async () => {
  const { getByText } = render(<Card1 />);
  
  await waitFor(() => {
    expect(getByText(/1 BTC =/i)).toBeInTheDocument();
    expect(getByText(/1 BTC = \$(.*) USD/i)).toBeInTheDocument();
    expect(getByText(/1 BTC = €(.*) EUR/i)).toBeInTheDocument();
    expect(getByText(/1 BTC = £(.*) GBP/i)).toBeInTheDocument();
  });
});



