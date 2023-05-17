import router from '@/router/index';
import { Order } from '@/model/order';
import { ref, Ref } from 'vue';
import Axios from 'axios';

export let components = () => {
  const order: Ref<Order> = ref({
    salesOrderNo: '',
    customerName: '',
    orderOfDate: undefined,
    shipmentDate: undefined,
    orderStatus: '',
    packageTrackingNo: '',
    shippingAgentCode: '',
    shippingWebAddress: '',
  });

  let url: string;
  const route = router;

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

  const axios = Axios.create();
  const Submit = async () => {
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
  };
  return { order, Submit };
};
