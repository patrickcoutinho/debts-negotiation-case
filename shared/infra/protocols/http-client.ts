export type HttpMethod = 'get' | 'post' | 'put' | 'delete';

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
};

export type HttpResponse<BodyType = any> = {
  statusCode: HttpStatusCode;
  body?: BodyType;
};

export interface HttpClient<ResponseType = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<ResponseType>>;
}
