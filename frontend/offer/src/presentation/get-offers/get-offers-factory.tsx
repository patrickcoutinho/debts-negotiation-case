import React, { FC } from 'react';
import GetOffersPage from './get-offers';
import { FetchHttpClient } from '@shared/infra';
import { RemoteGetOffers } from '../../data/get-offers/remote-get-offers';

const GetOfferFactory: FC<any> = () => {
  return (
    <GetOffersPage getOffers={new RemoteGetOffers(new FetchHttpClient())} />
  );
};

export default GetOfferFactory;
