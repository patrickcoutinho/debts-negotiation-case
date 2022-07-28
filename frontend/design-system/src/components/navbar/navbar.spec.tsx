import React from 'react';
import Navbar from './navbar';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { faker } from '@faker-js/faker';
import { render, screen, waitFor } from '@testing-library/react';

export type SubjectProps = {
  text?: string;
  action?: () => void;
};

const makeSubject = ({
  text = faker.word.verb(),
  action = jest.fn(),
}: SubjectProps) => {
  const subject = render(
    <Navbar
      links={[
        {
          text: text,
          action: action,
        },
      ]}
    />
  );

  return { subject };
};

describe('Navbar', () => {
  test('should render Navbar correctly', async () => {
    const text = 'fixed text';

    const {
      subject: { container },
    } = makeSubject({ text });

    expect(container).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should call correct action on click navbar link', async () => {
    const action = jest.fn();
    const text = faker.word.verb();

    makeSubject({ text, action });

    const link = screen.getByText(text);

    expect(link).toBeInTheDocument();

    userEvent.click(link);

    await waitFor(() => {
      expect(action).toBeCalledTimes(1);
    });
  });
});
