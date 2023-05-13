<template>
  <main>
    <link
      href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
      rel="stylesheet"
      id="bootstrap-css"
    />
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div v-if="listNotEmpty()">
            <h7>
              Order No. {{ orders[0]?.salesOrderNo }} <br />
              Customer name: {{ orders[0]?.customerName }}</h7
            >
            <br /><br />
          </div>
          <button
            @click.prevent="Submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
            Track order
          </button>
          <ul v-show="listNotEmpty()" class="timeline">
            <li>
              <a v-if="orders[0]?.orderStatus == 'Ordered'" href="">{{
                orders[0]?.orderStatus
              }}</a>
              <a href="#" class="float-right">{{ orders[0]?.orderOfDate }}</a>
              <p v-if="orders[0]?.orderStatus != 'Ordered'">Ordered</p>
            </li>
            <li>
              <a v-if="orders[0]?.orderStatus == 'Open'" href="">{{
                orders[0]?.orderStatus
              }}</a>
              <a href="#" class="float-right"></a>
              <p v-if="orders[0]?.orderStatus != 'Open'">Open</p>
            </li>
            <li>
              <a v-if="orders[0]?.orderStatus == 'Released'" href="">{{
                orders[0]?.orderStatus
              }}</a>
              <a href="#" class="float-right"></a>
              <p v-if="orders[0]?.orderStatus != 'Released'">Released</p>
            </li>
            <li>
              <a v-if="orders[0]?.orderStatus == 'Expected shipment'" href="">{{
                orders[0]?.orderStatus
              }}</a>
              <a href="#" class="float-right">{{ orders[0]?.shipmentDate }}</a>
              <p v-if="orders[0]?.orderStatus != 'Expected shipment'">
                Expected shipment
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
main {
  border-radius: 5px;
  background: rgb(252, 252, 252, 88%);
  width: 500px;
  margin: 10px auto;
  padding: 5px 0;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
}
body {
  font-family: 'Open Sans', Arial;
  background: linear-gradient(-45deg, #e1ae07, #e3ef79, #0a94c7, #5ceac9);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
ul.timeline {
  list-style-type: none;
  position: relative;
}
.h5 {
  font-family: 'Courier New', Courier, monospace;
  font-size: x-small;
}
ul.timeline:before {
  margin-left: -10%;
  content: ' ';
  background: #d4d9df;
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 100%;
  z-index: 400;
}
ul.timeline > li {
  margin: 20px 0;
  padding-left: 20px;
}
ul.timeline > li:before {
  margin-left: -10%;
  content: ' ';
  background: white;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #7fb3eb;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
}
</style>

<script setup lang="ts">
import { Order } from '@/model/order';
import { useOrdersStore } from '@/stores/ordersStore';
import { ref, Ref } from 'vue';
import router from '@/router/index';
import { AxiosCreate } from '@/modules/api';
const order: Ref<Order> = ref({
  salesOrderNo: undefined,
  customerName: '',
  orderOfDate: undefined,
  shipmentDate: undefined,
  orderStatus: '',
  packageTrackingNo: '',
  shippingAgentCode: '',
  shippingWebAddress: '',
});
const { addOrder } = useOrdersStore();
const route = router;
const axios = AxiosCreate();
let url: string;

const Submit = async () => {
  if (
    route.currentRoute.value.query.compid !== '' &&
    route.currentRoute.value.query.tenant !== '' &&
    route.currentRoute.value.query.id !== ''
  ) {
    url =
      'https://itb2204.bc365.eu:7048/bc/api/trackers/tracking/v2.0/' +
      'companies(' +
      route.currentRoute.value.query.compid +
      ')/salesOrders(' +
      route.currentRoute.value.query.id +
      ')/';
    axios.defaults.params = { tenant: route.currentRoute.value.query.tenant };

    await axios
      .get(url)
      .then(function (response) {
        let parsed = JSON.parse(JSON.stringify(response.data));
        order.value.salesOrderNo = parsed.salesOrderNo;
        order.value.customerName = parsed.customerName;
        order.value.orderOfDate = parsed.orderOfDate;
        order.value.shipmentDate = parsed.shipmentDate;
        order.value.orderStatus = parsed.orderStatus;
        order.value.packageTrackingNo = parsed.packageTrackingNo;
        order.value.shippingAgentCode = parsed.shippingAgentCode;
        order.value.shippingWebAddress = parsed.shippingWebAddress;
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
  order.value.packageTrackingNo = '';
  order.value.shippingAgentCode = '';
  order.value.shippingWebAddress = '';
};

const { orders } = useOrdersStore();
const listNotEmpty = () => orders.length !== 0;
</script>

<!-- > local host testimisel lisada localhostile -> /?compid=c44491e1-219e-ed11-9889-000d3a2a9069&tenant=trackers&id=71CD3535-4FD6-ED11-8405-C08EC299D726
-->
