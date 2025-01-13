import { resourceApi } from '.';
export async function login({email , password}) {
  try {
    const response = await fetch(`${resourceApi}/user/login`, {
        method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });
    return response.json();
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch resources');
  }
}

export async function register({username ,email , password}) {
  try {
    const response = await fetch(`${resourceApi}/user/register`, {
        method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username , email, password}),
    });
    return response.json();
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch resources');
  }
}