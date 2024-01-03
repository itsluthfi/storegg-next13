import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API;
const API_VER = 'api/v1';

export async function setSignUp(data) {
  const URL = 'auth/signup';

  const response = await axios
    .post(`${API_URL}/${API_VER}/${URL}`, data)
    .catch((err) => err.response);
  const axiosResponse = response.data;
  if (axiosResponse?.error === 1) {
    return axiosResponse;
  }
  return axiosResponse.data;
}

export async function setSignIn(data) {
  const URL = 'auth/signin';

  const response = await axios
    .post(`${API_URL}/${API_VER}/${URL}`, data)
    .catch((err) => err.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };

    return res;
  }

  const res = {
    error: false,
    message: 'success',
    data: response.data.data,
  };

  return res;
}
