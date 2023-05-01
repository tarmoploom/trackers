export interface Order {
  salesOrderNo?: Number;
  customerName: String;
  orderOfDate?: Date;
  shipmentDate?: Date;
  orderStatus: String;
}

export interface State {
  orders: Order[];
}
