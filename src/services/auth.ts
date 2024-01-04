import { SignInTypes } from './data-types';
import { callAPI } from '../../config';

const API_URL = process.env.NEXT_PUBLIC_API;
const API_VER = 'api/v1';

export async function setSignUp(data: FormData) {
  const url = `${API_URL}/${API_VER}/auth/signup`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
}

export async function setSignIn(data: SignInTypes) {
  const url = `${API_URL}/${API_VER}/auth/signin`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
}
