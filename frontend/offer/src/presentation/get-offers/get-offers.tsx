import React, { FC, useEffect, useState } from 'react';
import Page from 'design_system/Page';
import OfferCard from 'design_system/OfferCard';
import { GetOffers } from '../../domain/usecases/get-offers';

type GetOffersPageProps = {
  getOffers: GetOffers;
};

const GetOffersPage: FC<GetOffersPageProps> = ({ getOffers }) => {
  const [offers, setOffers] = useState<GetOffers.Model[] | [] | undefined>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getOffers.get();

        setOffers(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Page
      heading="Confira suas ofertas"
      text="Você tem oportunidades para renegociar seus débitos, confira abaixo:"
      content={
        offers &&
        offers.map((offer, key) => (
          <OfferCard
            key={key}
            value={offer.value}
            type={offer.type}
            discount={offer.installmentPlans[0].discount}
            installments={offer.installmentPlans[0].installments}
            installmentValue={offer.installmentPlans[0].installmentValue}
          />
        ))
      }
    />
  );
};

export default GetOffersPage;
