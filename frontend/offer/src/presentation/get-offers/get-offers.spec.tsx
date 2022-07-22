import React from 'react';
import GetOffersPage from './get-offers';
import { axe } from 'jest-axe';
import { FetchHttpClientMock } from '@shared/infra';
import { RemoteGetOffers } from '../../data/get-offers/remote-get-offers';
import { render } from '@testing-library/react';

jest.mock('design_system/Page', () => {}, { virtual: true });
jest.mock('design_system/OfferCard', () => {}, { virtual: true });

describe('GetOffersPage', () => {
  test.todo('should render GetOffersPage correctly');
});
