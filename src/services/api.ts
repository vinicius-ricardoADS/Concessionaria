const baseUrl = 'http://localhost:3000';

export const post = async(uri: string, init?: RequestInit) => {
  return fetch(`${baseUrl}${uri}`, {
    method: 'post',
    ...init,
  });
};

export const get = async(uri: string, init?: RequestInit) => {
  return fetch(`${baseUrl}${uri}`, {
    method: 'get',
    ...init,
  });
};

export const remove = async ( uri: string, id?: number, init?: RequestInit) => {
  return await fetch(`${baseUrl}${uri}/${id}`, {
    method: 'DELETE',
    ...init
  });
};
