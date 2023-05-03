import { Order } from '@/model/order';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useOrdersStore = defineStore('ordersStore', () => {
  const orders = ref<Order[]>([]);

  const addOrder = (order: Order) => {
    orders.value.push(order);
  };

  return { orders: orders, addOrder: addOrder };
});

export const usr = 'taploo';
export const auth = 'Oi8JpZDWqrvkvQNj9FrRV1xm/2VnhIot9el2j1oOm1E=';
