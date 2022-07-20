import React from 'react';
import Navbar from '../components/navbar/navbar';

export default {
  title: 'Example/Navbar',
  component: Navbar,
  argTypes: {},
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
