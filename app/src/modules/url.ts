import router from '@/router/index';

export const url = () => {
  const route = router;
  let url: string;

  if (
    route.currentRoute.value.query.compid !== '' &&
    route.currentRoute.value.query.tenant !== '' &&
    route.currentRoute.value.query.id !== ''
  ) {
    url =
      'https://trackers-backend.azurewebsites.net/api/record?compid=' +
      route.currentRoute.value.query.compid +
      '&tenant=' +
      route.currentRoute.value.query.tenant +
      '&id=' +
      route.currentRoute.value.query.id;
  } else {
    url = 'https://white-rock-041c9dd03.3.azurestaticapps.net';
  }
  return url;
};
