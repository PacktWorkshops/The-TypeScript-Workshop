import fetch from 'cross-fetch';

interface Cat {
  color: string;
  name: string;
}

export const catFetch = (url: string) => (resource: string) => (
  method: string
) => (body?: Cat) => {
  return fetch(`${url}/${resource}`, {
    body: JSON.stringify(body),
    headers: { 'content-type': 'application/json' },
    method,
  });
};
