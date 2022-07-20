import React from 'react';
import Page from '../components/page/page';

export default {
  title: 'Components/Page',
  component: Page,
  argTypes: {},
};

const Template = (args) => <Page {...args} />;

export const Default = Template.bind({});

Default.args = { content: <h1>Test</h1> };
