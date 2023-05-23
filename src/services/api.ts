/* eslint-disable linebreak-style */
const baseUrl = 'http://localhost:5173/api';

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

export const put = async ( uri: string, id?: number, init?: RequestInit) => {
  return await fetch(`${baseUrl}${uri}/${id}`, {
    method: 'PUT',
    ...init
  });
};