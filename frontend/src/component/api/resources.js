import axios from 'axios';
const API_URL = 'https://api.example.com/resources'; 
export async function fetchResources() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch resources');
  }
}