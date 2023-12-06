import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API;
const API_VER = 'api/v1';

export async function getFeaturedGame() {
  const URL = 'players/landingpage';

  const response = await axios.get(`${API_URL}/${API_VER}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}

export async function getDetailVoucher(id: string) {
  const URL = `players/${id}/detail`;

  const response = await axios.get(`${API_URL}/${API_VER}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}

export async function getGameCategory() {
  const URL = 'players/category';

  const response = await axios.get(`${API_URL}/${API_VER}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}
