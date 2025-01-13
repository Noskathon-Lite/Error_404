import { resourceApi } from '.';
export async function fetchResources() {
  try {
    // http://mentalhealth.com
    const response = await resourceApi.get('/');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch resources');
  }
}