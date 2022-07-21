import React from 'react';
import Button from '../components/button/button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args}>Teste</Button>;

export const Default = Template.bind({});
