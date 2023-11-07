import { TResponse } from "./models";

const sendRequest = async <TBodyResponse, TBody = {}>(method: string, url: string, body?: TBody): Promise<TResponse<TBodyResponse>> => {
  try {
    const headers: HeadersInit = {
      Accept: 'application/json',
    }

    if (body) {
      headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(url, {
      method: method,
      headers,
      body: body ? JSON.stringify(body) : undefined
    });

    if (response.ok) {
      return {
        ok: true,
        data: await response.json() as TBodyResponse
      }
    }

    return {
      ok: false,
      error: new Error(response.statusText)
    };
  } catch (error: unknown) {
    return {
      ok: false,
      error: error as Error
    };
  }
}

export const get = <TResponse>(url: string) =>
  sendRequest<TResponse>("GET", url);


export const post = <TResponse, TBody = {}>(url: string, body?: TBody) =>
  sendRequest<TResponse, TBody>("POST", url, body);


export const deleteRequest = <TResponse, TBody = {}>(url: string, body?: TBody) =>
  sendRequest<TResponse, TBody>("DELETE", url, body);
