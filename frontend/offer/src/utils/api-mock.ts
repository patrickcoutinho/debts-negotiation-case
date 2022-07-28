import { DebtType } from '../domain/models/offer';
import { GetOffers } from '../domain/usecases/get-offers';
import { faker } from '@faker-js/faker';

const item = {
  id: faker.datatype.uuid(),
  type: DebtType.creditCard,
  contract: '12345677890',
  date: new Date(),
  value: {
    actual: 9000.0,
    original: 3000.0,
  },
  description:
    'Lorem ipsum sit gravida torquent ipsum sapien nibh ante ornare fusce, aliquam habitant pellentesque magna turpis viverra blandit ad leo. ',
  installmentPlans: [
    {
      installments: 1,
      installmentValue: 870.97,
      discount: 90,
      total: 870.97,
    },
    {
      installments: 3,
      installmentValue: 400,
      discount: 70,
      total: 1200,
    },
    {
      installments: 6,
      installmentValue: 250,
      discount: 50,
      total: 1500,
    },
  ],
};
export const getOffersResponseMock: GetOffers.Model[] = [
  item,
  { ...item, id: faker.datatype.uuid() },
];
