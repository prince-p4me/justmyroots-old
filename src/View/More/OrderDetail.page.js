import React from "react";
import { Container, Content } from "native-base";
import OrderDetailSectionList from "../Components/OrderDetailSectionList";
import OrderDetailBlock from "../Components/OrderDetailBlock";
const OrderDetail = ({ order }) => {
  return (
    <Container>
      <Content padder>
        <OrderDetailBlock order={order} />
        <OrderDetailSectionList items={order.invoices} />
      </Content>
    </Container>
  );
};

export default OrderDetail;
