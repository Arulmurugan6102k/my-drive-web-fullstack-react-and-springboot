import client from './client';

export const createFolder =  (data) => client.post('./folders', data);
export const getFolders = (data) => client.get('./folders', data)

