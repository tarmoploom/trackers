import Axios from 'axios';
import { cred } from '@/stores/ordersStore';

export function AxiosCreate() {
  const axios = Axios.create();

  axios.defaults.headers.common['Authorization'] = 'Basic ' + cred().auth;
  axios.defaults.auth = {
    username: cred().usr,
    password: cred().auth,
  };
  return axios;
}
