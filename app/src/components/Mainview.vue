<template>
  <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
    <div class="text-center bg-gray-50">
      <div v-if="listNotEmpty()">
        <h1 class="font-bold">{{ title }}</h1>
        <DataTable :value="orders">
          <Column field="salesOrderNo" header="Order No." />
          <Column field="customerName" header="Name" />
          <Column field="orderOfDate" header="Order date" />
          <Column field="shipmentDate" header="Shipment date" />
          <Column field="orderStatus" header="Order status" />
        </DataTable>
      </div>
      <h1 v-if="listNotEmpty() === false" class="font-bold">
        Harjutused puuduvad
      </h1>
    </div>
    <div class="min-h-full flex items-center justify-center">
      <div class="max-w-md w-full space-y-8">
        <div class="mt-8 space-y-6">
          <div>
            <button
              @click.prevent="Submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              Lisa harjutus
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Order } from '@/model/order';
import { useOrdersStore } from '@/stores/ordersStore';
import { ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import { AxiosCreate } from '@/modules/api';

const order: Ref<Order> = ref({
  salesOrderNo: undefined,
  customerName: '',
  orderOfDate: undefined,
  shipmentDate: undefined,
  orderStatus: '',
});
const { addOrder } = useOrdersStore();
const router = useRouter();
const axios = AxiosCreate();
let url: string;

const Submit = async () => {
  if (
    router.currentRoute.value.query.id !== '' &&
    router.currentRoute.value.query.tenant !== ''
  ) {
    axios.defaults.params = { tenant: router.currentRoute.value.query.tenant };
    url =
      'https://itb2204.bc365.eu:7048/bc/api/trackers/tracking/v2.0/' +
      'companies(c44491e1-219e-ed11-9889-000d3a2a9069)/salesOrders(' +
      router.currentRoute.value.query.id +
      ')/';

    await axios
      .get(url)
      .then(function (response) {
        let parsed = JSON.parse(JSON.stringify(response.data));
        order.value.salesOrderNo = parsed.salesOrderNo;
        order.value.customerName = parsed.customerName;
        order.value.orderOfDate = parsed.orderOfDate;
        order.value.shipmentDate = parsed.shipmentDate;
        order.value.orderStatus = parsed.orderStatus;
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  addOrder({ ...order.value });

  order.value.salesOrderNo = undefined;
  order.value.customerName = '';
  order.value.orderOfDate = undefined;
  order.value.shipmentDate = undefined;
  order.value.orderStatus = '';
};

defineProps<{ title: string }>();

const { orders } = useOrdersStore();
const listNotEmpty = () => orders.length !== 0;

// 'https://itb2204.bc365.eu:7048/bc/api/trackers/tracking/v2.0/companies(c44491e1-219e-ed11-9889-000d3a2a9069)/salesOrders(561d5863-9ad1-ed11-8405-c08ec299d726)/';
// ?id=561d5863-9ad1-ed11-8405-c08ec299d726&tenant=230195TAF
// https://white-rock-041c9dd03.3.azurestaticapps.net
</script>
