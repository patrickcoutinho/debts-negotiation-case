import { DebtType } from '../domain/models/offer';
import { GetOffers } from '../domain/usecases/get-offers';

export const getOffersResponseMock: GetOffers.Model[] = [
  {
    value: {
      actual: 123.0,
      original: 123.0,
    },
    date: new Date(),
    contract: '12345677890',
    description: '',
    installmentPlans: [
      {
        installments: 10,
        installmentValue: 123,
        discount: 90,
        total: 99,
      },
    ],
    type: DebtType.creditCard,
  },
  {
    value: {
      actual: 123.0,
      original: 123.0,
    },
    date: new Date(),
    contract: '12345677890',
    description: '',
    installmentPlans: [
      {
        installments: 10,
        installmentValue: 123,
        discount: 90,
        total: 99,
      },
    ],
    type: DebtType.creditCard,
  },
  {
    value: {
      actual: 123.0,
      original: 123.0,
    },
    date: new Date(),
    contract: '12345677890',
    description: '',
    installmentPlans: [
      {
        installments: 10,
        installmentValue: 123,
        discount: 90,
        total: 99,
      },
    ],
    type: DebtType.creditCard,
  },
];
