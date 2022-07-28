import React, { FC, useEffect, useState } from 'react';
import Page from 'design_system/Page';
import OfferCard from '../offer-card/offer-card';
import { GetOffers } from '../../domain/usecases/get-offers';
import SelectedOffers from '../components/selected-offers/selected-offers';

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
    <>
      <SelectedOffers />
      <Page
        heading="Confira suas ofertas"
        text="Você tem oportunidades para renegociar seus débitos, confira abaixo:"
        content={
          <>
            {offers?.length &&
              offers.map((offer, key) => <OfferCard key={key} {...offer} />)}
          </>
        }
      />
    </>
  );
};

export default GetOffersPage;
