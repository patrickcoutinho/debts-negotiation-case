import React, { FC } from 'react';
import AgreementSuccess from 'offer/AgreementSuccess';
import { Helmet } from 'react-helmet';

const SucessoPage: FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DebtsFree | Sucesso</title>
      </Helmet>
      <AgreementSuccess />
    </>
  );
};

export default SucessoPage;
