import { DebtType } from '../../domain/models/offer';
import { FetchHttpClientMock, HttpStatusCode } from 'shared_infra/infra';
import { GetOffers } from '../../domain/usecases/get-offers';
import { RemoteGetOffers } from './remote-get-offers';

type SubjectTypes = {
  responseStatus?: HttpStatusCode;
  responseBody?: any;
};

type SubjectResponse = {
  subject: RemoteGetOffers;
};

const makeSubject = ({
  responseStatus = HttpStatusCode.ok,
  responseBody = null,
}: SubjectTypes): SubjectResponse => {
  const httpClientMock = new FetchHttpClientMock();
  jest.spyOn(httpClientMock, 'request');

  httpClientMock.responseStatus = responseStatus;
  httpClientMock.responseBody = responseBody;

  const subject = new RemoteGetOffers(httpClientMock);

  return { subject };
};

describe('RemoteGetOffers', () => {
  test('should get offers', async () => {
    const mockResponse: GetOffers.Model[] = [
      {
        id: '123acc',
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

    const { subject } = makeSubject({ responseBody: mockResponse });

    const response = await subject.get();

    expect(response).toEqual(mockResponse);
  });
});
