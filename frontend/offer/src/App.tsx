import React, { FC } from 'react';
import RemoteNavbar from 'design_system/Navbar';
import RemoteFooter from 'design_system/Footer';
import GetOffersPage from './presentation/get-offers/get-offers';
import ChakraProvider from 'design_system/ChakraProvider';
import { RemoteGetOffers } from './data/get-offers/remote-get-offers';
import { FetchHttpClient } from '@shared/infra';

const App: FC = () => {
  return (
    <ChakraProvider>
      <RemoteNavbar />
      <GetOffersPage getOffers={new RemoteGetOffers(new FetchHttpClient())} />
      <RemoteFooter />
    </ChakraProvider>
  );
};

export default App;
