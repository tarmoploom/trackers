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
          <h7>
            <a v-if="order?.salesOrderNo !== undefined">
              Order No. {{ order?.salesOrderNo }} <br
            /></a>
            <a v-if="order?.customerName !== ''">
              Customer: {{ order?.customerName }} <br
            /></a>
            <br />
            <a v-if="order?.packageTrackingNo !== ''"
              >{{ order?.shippingAgentCode + ':' }} <br />
            </a>
            <a
              v-if="order?.packageTrackingNo !== ''"
              :href="order?.shippingWebAddress + ''"
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
            @click.prevent="comp.Submit"
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
main {
  border-radius: 5px;
  background: rgb(252, 252, 252);
  width: 600px;
  margin: 10px auto;
  padding: 5px 0;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
}
body {
  font-family: 'Open Sans', Arial;
  background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/70f81163393359.5ab4c75066483.gif);
  background-size: 50%;
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
import { components } from '@/modules/api';
import { onMounted } from 'vue';

let comp = components();
let order = comp.order.value;
onMounted(comp.Submit);
</script>

<!-- > v1: /?compid=c44491e1-219e-ed11-9889-000d3a2a9069&tenant=trackers&id=71CD3535-4FD6-ED11-8405-C08EC299D726
variant 2: /?compid=c44491e1-219e-ed11-9889-000d3a2a9069&tenant=230195taf&id=F6F58128-30F0-ED11-8407-FC6E82E3F604
-->
