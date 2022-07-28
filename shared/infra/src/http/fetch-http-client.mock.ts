import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
} from '../protocols/http-client';

export class FetchHttpClient implements HttpClient {
  public responseBody: any;
  public responseStatus: HttpStatusCode = HttpStatusCode.ok;

  request = async ({
    url,
    method,
    headers,
    body,
  }: HttpRequest): Promise<HttpResponse<any>> => {
    return {
      statusCode: this.responseStatus,
      body: this.responseBody,
    };
  };
}
