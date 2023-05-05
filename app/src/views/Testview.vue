
<template>
    <main>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<div class="container mt-5 mb-5">
    <div class="row">
        <div class="col-md-6 offset-md-3">
        
            <div v-if="listNotEmpty()">
        <h1 class="font-bold">{{ title }}</h1>
        <DataTable :value="orders">
          <Column field="salesOrderNo" header="Order No." />
          <Column field="customerName" header="Name" />
          <Column field="orderOfDate" header="Order date" />
          <Column field="shipmentDate" header="Shipment date" />
          <Column v-show="isTrue" field="orderStatus" header="Order status" />
        </DataTable>
      </div>
        <button
              @click.prevent="Submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              Track order
            </button>
            <ul class="timeline">
                <li>
                    <a href="">Open</a>
                    <a href="" class="float-right">21 March, 2014</a>
                    <p>Open</p>
                </li>
                <li>
                    <a href="">Released</a>
                    <a href="" class="float-right">4 March, 2014</a>
                    <p>Released</p>
                </li>
                <li>
                    <a href="">Delivered</a>
                    <a href="" class="float-right">1 April, 2014</a>
                    <p>Delivered</p>
                </li>
            </ul>
        </div>
    </div>
</div>
    </main>
  </template>
  
  <!-- <style>
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
  
  body {
    font-family: 'Open Sans', Arial;
    background-image: url(https://user-images.githubusercontent.com/356994/100579048-4e006a80-3298-11eb-8ea0-a7205221f389.gif);
    background-size: 100%;
}
  .button1 {
    font-family: 'Open Sans', Arial;
    color: #939292;
    margin-left: 60%;
  }
  main {
    border-radius: 10px;
    background: rgb(252, 252, 252);
    width: 700px;
    margin: 20px auto;
    padding: 10px 0;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  }
  h2 {
    text-align: center;
  }
  p {
    font-size: 13px;
  }
  input {
    display: none;
    visibility: hidden;
  }
  label {
    display: block;
    padding: 0.5em;
    text-align: center;
    border-bottom: 1px solid #ccc;
    color: #666;
  }
  label:hover {
    color: #000;
  }
  label::before {
    font-family: Consolas, monaco, monospace;
    font-weight: bold;
    font-size: 15px;
    content: '^';
    vertical-align: text-top;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background: radial-gradient(ellipse at center, #ccc 50%, transparent 50%);
  }
  section {
    padding: 0 20px;
  }
  .float-container {
    border: 3px solid #fff;
    padding: 20px;
  }
  .float-child {
    width: 30%;
    float: left;
    padding: 10px;
    padding-left: 50px;
    margin-top: -20px;
  }
  .float-child1 {
    width: 70%;
    float: left;
    padding: 10px;
    padding-top: 30px;
    text-align: left;
    padding-left: 1px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  </style> -->

  <style>
    ul.timeline {
    list-style-type: none;
    position: relative;
}
.h5{
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
    border: 3px solid #22c0e8;
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

const isTrue="false";
const order: Ref<Order> = ref({
  salesOrderNo: undefined,
  customerName: '',
  orderOfDate: undefined,
  shipmentDate: undefined,
  orderStatus: '',
});
const { addOrder } = useOrdersStore();
const route = router;
const axios = AxiosCreate();
let url: string;

const Submit = async () => {
  if (
    route.currentRoute.value.query.compid !== '' &&
    route.currentRoute.value.query.id !== '' &&
    route.currentRoute.value.query.tenant !== ''
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
</script>

  