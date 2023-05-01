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
export const auth = 'ITB2204k23!';
