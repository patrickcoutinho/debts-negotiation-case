import React from 'react';
import Navbar from './navbar';
import { render } from '@testing-library/react';

describe('Navbar', () => {
  test('should render App correctly', () => {
    const { container } = render(<Navbar />);

    expect(container).toMatchSnapshot();
  });
});
