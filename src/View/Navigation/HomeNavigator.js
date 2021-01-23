import Home from "../Home/Home.container";
import ShopByOptions from "../ShopBy/ShopBy.container";
import ProductList from "../Product/ProductList.container";
import ProductDetail from "./ProductModalNavigator";
import Cart from "./CartModalNavigator";
import OrderSummary from "../Order/OrderSummary.container";
import PaymentMethods from "../Order/PaymentMethods.container";
import Address from "../Address/Address.container";
import SearchProducts from "../Product/SearchProducts.container";
import CartIcon from "../Cart/CartIcon.container";
import PaymentGateway from "../Order/PaymentGateway";
import { createStackNavigator } from "react-navigation";
import { Colors } from "../Themes";
import React from "react";
import { View } from "native-base";
import HeaderIcon from "../Components/HeaderIcon";

import { Platform } from "react-native";
import ReferralIcon from "../Components/ReferralIcon";
import OffersIcon from "../Components/OffersIcon";

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home"
      }
    },
    SubCategories: {
      screen: ShopByOptions
    },
    ProductList: {
      screen: ProductList
    },
    ProductDetail: {
      screen: ProductDetail,
      navigationOptions: {
        title: "Product"
      }
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        title: "Cart",
        headerRight: null
      }
    },

    ShippingAddress: {
      screen: Address,
      navigationOptions: {
        title: "Shipping Address"
      }
    },
    BillingAddress: {
      screen: Address,
      navigationOptions: {
        title: "Billing Address"
      }
    },
    OrderSummary: {
      screen: OrderSummary,
      navigationOptions: {
        title: "Order Summary"
      }
    },
    PaymentMethods: {
      screen: PaymentMethods,
      navigationOptions: {
        title: "Payment"
      }
    },
    PaymentGateway: {
      screen: PaymentGateway,
      navigationOptions: {
        title: "Pay"
      }
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: ({ navigation }) => ({
      headerTintColor: Colors.ember,
      headerRight: (
        <View style={{ flexDirection: "row" }}>
          <ReferralIcon/>
          <OffersIcon/>
          {/* <CartIcon navigation={navigation} /> */}
        </View>
      ),
      headerTitleStyle: {
        ...Platform.select({
          ios: { fontFamily: "Arial",fontSize:14 },
          android: { fontFamily: "Roboto",fontSize:14 }
        })
      }
    })
  }
);

export default HomeNavigator;
