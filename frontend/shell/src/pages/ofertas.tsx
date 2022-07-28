import React, { FC } from 'react';
import GetOffers from 'offer/GetOffers';
import { Helmet } from 'react-helmet';

const Ofertas: FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DebtsFree | Ofertas</title>
      </Helmet>
      <GetOffers />
    </>
  );
};

export default Ofertas;
