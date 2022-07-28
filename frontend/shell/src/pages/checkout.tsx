import React, { FC } from 'react';
import Checkout from 'offer/Checkout';
import { Helmet } from 'react-helmet';

const CheckoutPage: FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DebtsFree | Checkout</title>
      </Helmet>
      <Checkout />
    </>
  );
};

export default CheckoutPage;
