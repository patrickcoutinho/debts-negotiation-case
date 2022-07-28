import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
} from '../protocols/http-client';

export class FetchHttpClient implements HttpClient {
  request = async ({
    url,
    method,
    headers,
    body,
  }: HttpRequest): Promise<HttpResponse<any>> => {
    const fetchResponse: Response = await window.fetch(url, {
      method,
      body,
      headers: new Headers({
        ...headers,
        Accept: 'application/json',
      }),
    });

    let responseBody;
    if (fetchResponse.status === HttpStatusCode.ok) {
      responseBody = await this.getBody(fetchResponse);
    }

    return {
      statusCode: fetchResponse.status,
      body: responseBody,
    };
  };

  private getBody = async (fetchResponse: Response) => {
    try {
      return await fetchResponse.json();
    } catch (_) {
      return;
    }
  };
}
