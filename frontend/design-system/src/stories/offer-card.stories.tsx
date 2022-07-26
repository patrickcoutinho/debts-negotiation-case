import React from 'react';
import OfferCard from '../components/offer-card/offer-card';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/OfferCard',
  component: OfferCard,
} as ComponentMeta<typeof OfferCard>;

const Template: ComponentStory<typeof OfferCard> = (args) => (
  <OfferCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  value: {
    original: 9768.9,
    actual: 1276.99,
  },
  type: 'Cartão de Crédito',
  contract: 'abcd123',
  description: 'test description',
  discount: 90,
  installments: 24,
  installmentValue: 123,
};
