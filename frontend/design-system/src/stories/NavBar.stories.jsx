import React from 'react';
import NavBar from '../components/NavBar/NavBar';

export default {
  title: 'Example/NavBar',
  component: NavBar,
  argTypes: {},
};

const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});