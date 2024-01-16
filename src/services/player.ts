import axios from 'axios';
import { callAPI } from '../../config';
import { CheckoutTypes } from './data-types';

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

export async function setCheckout(data: CheckoutTypes) {
  const url = `${API_URL}/${API_VER}/players/checkout`;

  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
}

export async function getOverviewMember() {
  const url = `${API_URL}/${API_VER}/players/dashboard`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}
