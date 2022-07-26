import { OfferModel } from '../models/offer';

export interface GetOffers {
  get: () => Promise<GetOffers.Model[] | undefined>;
}

export namespace GetOffers {
  export type Model = OfferModel;
}
