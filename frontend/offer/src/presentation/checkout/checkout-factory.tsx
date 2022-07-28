import React, { FC } from 'react';
import Checkout from './checkout';
import { FetchHttpClient } from 'shared_infra/infra';
import { RemoteAgreement } from '../../data/agreement/remote-agreement';

const GetOfferFactory: FC<any> = () => {
  return (
    <Checkout agreementService={new RemoteAgreement(new FetchHttpClient())} />
  );
};

export default GetOfferFactory;
