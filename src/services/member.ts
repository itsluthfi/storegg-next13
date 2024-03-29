import { callAPI } from '../../config';

const API_URL = process.env.NEXT_PUBLIC_API;
const API_VER = 'api/v1';

export async function getMemberOverview() {
  const url = `${API_URL}/${API_VER}/players/dashboard`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function getMemberTransactions(valueParams: string) {
  let params = '';
  if (valueParams === 'all') {
    params = '';
  } else {
    params = `?status=${valueParams}`;
  }

  const url = `${API_URL}/${API_VER}/players/history${params}`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function getTransactionDetail(id: string, token: string) {
  const url = `${API_URL}/${API_VER}/players/history/${id}/detail`;

  return callAPI({
    url,
    method: 'GET',
    serverToken: token,
  });
}

export async function setUpdateProfile(data: FormData, id: string) {
  const url = `${API_URL}/${API_VER}/players/profile/${id}`;

  return callAPI({
    url,
    method: 'PUT',
    data,
    token: true,
  });
}
