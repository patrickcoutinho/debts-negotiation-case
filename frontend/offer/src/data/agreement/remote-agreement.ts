import { Agreement } from '../../domain/usecases/agreement';
import { agreementMock } from '../../utils/api-mock';
import { HttpClient } from 'shared_infra/infra';

export class RemoteAgreement implements Agreement {
  private httpClient: HttpClient;
  private api: string = process.env.API_URL as string;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public get = async (): Promise<Agreement.Model | undefined> => {
    return Promise.resolve(agreementMock);

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

  public post = async (offersId: string[]): Promise<void> => {
    return Promise.resolve();

    try {
      await this.httpClient.request({
        url: this.api,
        method: 'post',
        body: { offersId },
      });
    } catch (error) {
      console.log(error);
    }
  };
}
