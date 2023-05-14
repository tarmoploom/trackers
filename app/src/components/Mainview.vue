<template>
  <main>
    <link
      href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
      rel="stylesheet"
      id="bootstrap-css"
    />
    <div class="container mt-4 mb-4">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h7>
            Order No. {{ order?.salesOrderNo }} <br />
            Customer: {{ order?.customerName }} <br /><br />
            <a v-if="order?.packageTrackingNo !== ''"
              >{{ order?.shippingAgentCode }} <br />
            </a>
            <a
              v-if="order?.packageTrackingNo !== ''"
              :href="order.shippingWebAddress + ''"
              >Parcel Tracking
            </a>
          </h7>
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          </span>
          <ul class="timeline">
            <li>
              <a href="#" class="float-right">{{ order?.shipmentDate }}</a>
              <p>Expected shipment</p>
            </li>
            <li>
              <a v-if="order?.orderStatus === 'Released'" href="#">{{
                order?.orderStatus
              }}</a>
              <p v-if="order?.orderStatus !== 'Released'">Released</p>
            </li>
            <li>
              <a v-if="order?.orderStatus === 'Open'" href="#">{{
                order?.orderStatus
              }}</a>
              <p v-if="order?.orderStatus !== 'Open'">Open</p>
            </li>
            <li>
              <a href="#" class="float-right">{{ order?.orderOfDate }}</a>
              <p>Ordered</p>
            </li>
          </ul>
          <button
            @click.prevent="Submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Track order
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.address {
  text-align: center;
}

.btn10:hover {
  background: rgb(228, 228, 244);
  background: linear-gradient(
    0deg,
    rgb(233, 233, 245) 0%,
    rgb(222, 225, 228) 100%
  );
}
main {
  border-radius: 5px;
  background: rgb(252, 252, 252, 88%);
  width: 560px;
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
import { url } from '@/modules/url';
import { ref, Ref } from 'vue';
import Axios from 'axios';

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

const axios = Axios.create();
const Submit = async () => {
  await axios
    .get(url())
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
};
</script>

<!-- > var 1: /?compid=c44491e1-219e-ed11-9889-000d3a2a9069&tenant=trackers&id=71CD3535-4FD6-ED11-8405-C08EC299D726
   variant 2: /?compid=c44491e1-219e-ed11-9889-000d3a2a9069&tenant=230195taf&id=F6F58128-30F0-ED11-8407-FC6E82E3F604
-->
