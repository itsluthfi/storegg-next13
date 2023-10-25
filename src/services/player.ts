import axios from 'axios';

export async function getFeaturedGame() {
  const API_URL = process.env.NEXT_PUBLIC_API;
  const API_VER = 'api/v1';
  const URL = 'players/landingpage';

  const response = await axios.get(`${API_URL}/${API_VER}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}
