export interface Order {
  salesOrderNo: String;
  customerName: String;
  orderOfDate?: Date;
  shipmentDate?: Date;
  orderStatus: String;
  packageTrackingNo: String;
  shippingAgentCode: String;
  shippingWebAddress: String;
}
