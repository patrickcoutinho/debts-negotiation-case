import React from 'react';
import Navbar from '../components/navbar/navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [{ text: 'teste', action: () => console.log('clicked') }],
};
