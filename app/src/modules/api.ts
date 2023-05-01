import Axios from 'axios';
import { usr, auth } from '@/stores/ordersStore';

export function AxiosCreate() {
  const axios = Axios.create();

  axios.defaults.headers.common['Authorization'] = 'Basic ' + auth;
  axios.defaults.auth = {
    username: usr,
    password: auth,
  };
  return axios;
}
