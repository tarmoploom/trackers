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

  const Submit = async () => {
    const axios = Axios.create();
    axios.defaults.headers.common.Accept = 'application/json';
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.timeout = 10000;
    axios.defaults.timeoutErrorMessage = 'Request timed out: 10 seconds';

    let url = 'https://trackers-backend.azurewebsites.net/api/record';
    let route = router.currentRoute.value.query;
    axios.defaults.params = { compid: route.compid, tenant: route.tenant, id: route.id };

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
        console.log('GET: OK');
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
