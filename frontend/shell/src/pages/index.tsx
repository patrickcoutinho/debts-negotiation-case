import Home from 'home/Home';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

const Index: FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DebtsFree</title>
      </Helmet>
      <Home />
    </>
  );
};

export default Index;
