<template>
  <main>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h7>
            <a v-if="order?.salesOrderNo !== ''"> Order No. {{ order?.salesOrderNo }} <br /></a>
            <a v-if="order?.customerName !== ''"> Customer: {{ order?.customerName }} <br /></a>
            <br />
            <a v-if="order?.packageTrackingNo !== ''">{{ order?.shippingAgentCode + ':' }} <br /> </a>
            <a class="parceltrack" v-if="order?.packageTrackingNo !== ''" :href="order?.shippingWebAddress + ''"
              >Parcel Tracking
            </a>
          </h7>
          <span class="absolute left-0 inset-y-0 flex items-center pl-3"> </span>
          <ul class="timeline">
            <li>
              <a href="#" class="float-right">{{ order?.shipmentDate }}</a>
              <p>Expected shipment</p>
            </li>
            <li>
              <div v-if="order?.orderStatus === 'Released'" class="hh-grayBox">
                <div class="order-tracking completed">
                  <div class="is-complete"></div>
                </div>
              </div>
              <a v-if="order?.orderStatus === 'Released'" href="#">{{ order?.orderStatus }}</a>
              <p v-if="order?.orderStatus !== 'Released'">Released</p>
            </li>
            <li>
              <div
                v-if="
                  order?.orderStatus === 'Pending Approval' ||
                  order?.orderStatus === 'Pending Prepayment' ||
                  order?.orderStatus === 'Open'
                "
                class="hh-grayBox"
              >
                <div class="order-tracking completed">
                  <div class="is-complete"></div>
                </div>
              </div>
              <a v-if="order?.orderStatus === 'Pending Approval'" href="#">{{ order?.orderStatus }}</a>
              <a v-else-if="order?.orderStatus === 'Pending Prepayment'" href="#">{{ order?.orderStatus }}</a>
              <a v-else-if="order?.orderStatus === 'Open'" href="#">{{ order?.orderStatus }}</a>
              <a v-else>Open</a>
            </li>
            <li>
              <a href="#" class="float-right">{{ order?.orderOfDate }}</a>
              <p>Ordered</p>
            </li>
          </ul>
          <button
            type="button"
            @click.prevent="comp.Submit"
            class="group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-black hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Track order
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.parceltrack {
  color: rgb(60, 113, 154);
}
button {
  border: 2px solid;
  border-color: #000000;
  background-color: rgb(69, 129, 176);
}
button:hover {
  background-color: rgb(255, 255, 255);
}
a:link {
  color: rgb(69, 129, 176);
}
a:link:hover {
  color: rgb(35, 36, 38);
  background-color: transparent;
  text-decoration: underline;
}
.hh-grayBox {
  margin-left: -27px;
}
.order-tracking {
  position: relative;
  display: block;
}
.order-tracking .is-complete {
  display: block;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  margin-bottom: -15px;
}
.order-tracking.completed .is-complete {
  background-color: #4f8db4;
  border-color: #000000;
  border-width: 2px;
}
main {
  border-radius: 5px;
  background: rgb(252, 252, 252);
  width: 600px;
  margin: 10px auto;
  padding: 5px 0;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
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
  background: #000000;
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 100%;
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
  border: 2px solid #000000;
  left: 20px;
  width: 20px;
  height: 20px;
}
</style>

<script setup lang="ts">
import { components } from '@/modules/api';
import { onMounted } from 'vue';

let comp = components();
let order = comp.order.value;
onMounted(comp.Submit);
</script>
