import React, { FC } from 'react';
import RemoteNavbar from 'design_system/Navbar';
import RemoteFooter from 'design_system/Footer';
import GetOffersPage from './presentation/get-offers/get-offers';
import { RemoteGetOffers } from './data/get-offers/remote-get-offers';
import { FetchHttpClient } from 'shared_infra/infra';

const App: FC = () => {
  return (
    <>
      <RemoteNavbar links={[{ text: 'teste', action: () => {} }]} />
      <GetOffersPage getOffers={new RemoteGetOffers(new FetchHttpClient())} />
      <RemoteFooter />
    </>
  );
};

export default App;
