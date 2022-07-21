import { DebtType } from '../../domain/models/offer';
import { GetOffers } from '../../domain/usecases/get-offers';
import { HttpClient } from '@shared/infra';

export class RemoteGetOffers implements GetOffers {
  private httpClient: HttpClient;
  private api: string = process.env.API_URL as string;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public get = async (): Promise<GetOffers.Model[]> => {
    // const response = await this.httpClient.request({
    //   url: this.api,
    //   method: 'get',
    // });

    // return response.body;

    return [
      {
        value: {
          actual: 123.0,
          original: 123.0,
        },
        date: new Date(),
        contract: '12345677890',
        description: '',
        installmentPlans: [],
        type: DebtType.creditCard,
      },
      {
        value: {
          actual: 123.0,
          original: 123.0,
        },
        date: new Date(),
        contract: '12345677890',
        description: '',
        installmentPlans: [],
        type: DebtType.creditCard,
      },
      {
        value: {
          actual: 123.0,
          original: 123.0,
        },
        date: new Date(),
        contract: '12345677890',
        description: '',
        installmentPlans: [],
        type: DebtType.creditCard,
      },
    ];
  };
}
