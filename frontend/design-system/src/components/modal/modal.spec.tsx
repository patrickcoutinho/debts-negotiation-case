import React from 'react';
import Modal from './modal';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { faker } from '@faker-js/faker';
import { render, RenderResult, screen } from '@testing-library/react';

type SubjectProps = {
  openButton?: string;
  modalTitle?: string;
};

type SubjectTypes = {
  subject: RenderResult;
};

const makeSubject = ({
  openButton = faker.word.verb(),
  modalTitle = faker.word.verb(),
}: SubjectProps): SubjectTypes => {
  const subject = render(
    <Modal
      title={modalTitle}
      text="modal text"
      openButton={openButton}
      button="open"
      buttonAction={jest.fn()}
    />
  );

  return { subject };
};

describe('Modal', () => {
  test('should render Modal correctly', async () => {
    const {
      subject: { container },
    } = makeSubject({ openButton: 'Open' });

    expect(container).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render Modal open button', async () => {
    const openButton = faker.word.verb();

    makeSubject({ openButton });

    expect(await screen.findByText(openButton)).toBeInTheDocument();
  });

  test('should open Modal on click button', async () => {
    const openButton = faker.word.verb();
    const modalTitle = faker.lorem.sentence();

    makeSubject({ openButton, modalTitle });

    const button = await screen.findByText(openButton);

    expect(
      screen.queryByText(new RegExp(modalTitle, 'i'))
    ).not.toBeInTheDocument();

    userEvent.click(button);

    expect(
      await screen.findByText(new RegExp(modalTitle, 'i'))
    ).toBeInTheDocument();
  });
});
