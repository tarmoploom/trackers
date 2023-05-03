import { Order } from '@/model/order';
import router from '@/router/index';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useOrdersStore = defineStore('ordersStore', () => {
  const orders = ref<Order[]>([]);

  const addOrder = (order: Order) => {
    orders.value.push(order);
  };

  return { orders: orders, addOrder: addOrder };
});

export const cred = () => {
  if (router.currentRoute.value.query.tenant == '230195taf') {
    return {
      usr: 'taploo',
      auth: 'so2VJB9nU301wRYEvtw1ocsv2hEZUoON6PQHuT5r5EQ=',
    };
  }
  // if (router.currentRoute.value.query.tenant === 'MARTIKLINR+väiksed_tähed!') {
  // usr: 'kasutaja',
  // auth: 'BC'st saadud võti',
  // }
  // if (router.currentRoute.value.query.tenant === 'MARTIKLINR+väiksed_tähed!') {
  // usr: 'kasutaja',
  // auth: 'BC'st saadud võti',
  // }

  // default: trackers
  return {
    usr: 'taploo',
    auth: 'Oi8JpZDWqrvkvQNj9FrRV1xm/2VnhIot9el2j1oOm1E=',
  };
};
