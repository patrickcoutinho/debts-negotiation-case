import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar';

describe('App', () => {
  test('should render App correctly', () => {
    const { container } = render(<NavBar />);

    expect(container).toMatchSnapshot();
  });
});
