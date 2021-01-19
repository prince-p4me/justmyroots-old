import React from "react";
import { Container, Content, List } from "native-base";
import { ActivityIndicator } from "react-native";
import LabelValueItem from "../Components/LabelValueItem";
import moment from "moment";
import OrderList from "../Components/OrderList";

const MyOrders = ({ orders, orderClicked }) => {
  return (
    <Container>
      <Content>
        <OrderList items={orders} orderClicked={orderClicked} />
      </Content>
    </Container>
  );
};

export default MyOrders;
