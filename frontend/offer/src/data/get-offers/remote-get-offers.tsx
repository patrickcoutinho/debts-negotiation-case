import { GetOffers } from '../../domain/usecases/get-offers';
import { getOffersResponseMock } from '../../utils/api-mock';
import { HttpClient } from 'shared_infra/infra';

export class RemoteGetOffers implements GetOffers {
  private httpClient: HttpClient;
  private api: string = process.env.API_URL as string;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public get = async (): Promise<GetOffers.Model[] | undefined> => {
    return Promise.resolve(getOffersResponseMock);

    try {
      const response = await this.httpClient.request({
        url: this.api,
        method: 'get',
      });

      return response.body || undefined;
    } catch (error) {
      console.log(error);
    }
  };
}
