import React, { FC } from 'react';
import GetOffersPage from './get-offers';
import SelectedOffers from '../components/selected-offers/selected-offers';
import { FetchHttpClient } from 'shared_infra/infra';
import { RemoteGetOffers } from '../../data/get-offers/remote-get-offers';
import { RemoteAgreement } from '../../data/agreement/remote-agreement';

const GetOfferFactory: FC<any> = () => {
  const fetchService = new FetchHttpClient();

  return (
    <>
      <SelectedOffers agreementService={new RemoteAgreement(fetchService)} />
      <GetOffersPage getOffers={new RemoteGetOffers(fetchService)} />
    </>
  );
};

export default GetOfferFactory;
