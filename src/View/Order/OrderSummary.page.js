import React from "react";
import { Container, Content, Text, ListItem, Body, Right } from "native-base";
import { Switch } from "react-native";
import ButtonFooter from "../Components/ButtonFooter";
import OrderSectionList from "../Components/OrderSectionList";
import CouponForm from "../Components/CouponForm";
import Label from "../Components/Label";
import { Fonts, Metrics, Colors } from "../Themes";

const Order = ({
  order,
  shippingLocation,
  fetching,
  applyCoupon,
  next,
  loyaltyPoints,
  changeLoyaltyStatus,
  useLoyaltyPoints
}) => {
  return (
    <Container>
      <Content padder>
        <OrderSectionList
          items={order.sections}
          shippingLocation={shippingLocation}
        />
        <ListItem />
        <CouponForm onSubmit={applyCoupon} fetching={fetching} />
        <ListItem />

        <Label text={loyaltyPoints + " Loyalty Points"} large />
        <ListItem>
          <Body>
            <Text>Use Loyalty Points</Text>
          </Body>
          <Right>
            <Switch
              trackColor={{
                false: Colors.lightCharcoal,
                true: Colors.facebook
              }}
              value={useLoyaltyPoints}
              onValueChange={changeLoyaltyStatus}
            />
          </Right>
        </ListItem>
      </Content>
      <ButtonFooter
        title={"PAY (Rs." + order.total + ")"}
        footerClicked={next}
      />
    </Container>
  );
};

export default Order;
