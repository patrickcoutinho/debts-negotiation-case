import React from 'react';
import Modal, { ModalProps } from '../components/modal/modal';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => (
  <Modal {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: 'Modal Title',
  text: 'Modal Title',
  openButton: 'Open Modal',
};
