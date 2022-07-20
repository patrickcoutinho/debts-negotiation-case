import React from 'react';
import Navbar from './navbar';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';

describe('Navbar', () => {
  test('should render Navbar correctly', async () => {
    const { container } = render(<Navbar />);

    expect(container).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });
});
