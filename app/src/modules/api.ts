import Axios from 'axios';

export function AxiosCreate() {
  const axios = Axios.create();

  axios.defaults.headers.common['Authorization'] =
    'Basic so2VJB9nU301wRYEvtw1ocsv2hEZUoON6PQHuT5r5EQ=';
  axios.defaults.auth = {
    username: 'taploo',
    password: 'so2VJB9nU301wRYEvtw1ocsv2hEZUoON6PQHuT5r5EQ=',
  };
  return axios;
}
