import { NavigationActions,createBottomTabNavigator } from "react-navigation";
import CategoriesNavigator from "./CategoriesNavigator";
import ShopByNavigator from "./ShopByNavigator";
import DfhModalNavigator from "./DfhModalNavigator";
import ModalNavigator from "./ModalNavigator";
import LoginModalNavigator from "./LoginModalNavigator";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { Colors } from "../Themes";
import SearchProducts from "../Product/SearchProducts.container";
import CartModalNavigator from "./CartModalNavigator";
import SearchNavigator from "./SearchNavigator";
import MoreNavigator from "./MoreNavigator";
import HomeNavigator from "./HomeNavigator";

export default createBottomTabNavigator(
  {
    Home: HomeNavigator,
    // Categories: CategoriesNavigator,
    // ShopBy: ShopByNavigator,
    // DFH: DfhModalNavigator,
    Search:SearchNavigator,
    Cart:CartModalNavigator,
    Account: MoreNavigator
  },
  {
    // initialRouteName: "Search",
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "home";
        } else if (routeName === "Search") {
          iconName = "search";
        } else if (routeName === "Cart") {
          iconName = "shopping-bag";
        } else if (routeName === "DFH") {
          iconName = "gift";
        } else if (routeName === "Account") {
          iconName = "user-o";
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
        );
      },
      // tabBarOnPress: () => {
      //   const { routeName } = navigation.state;
        // if (routeName=="Search") {
        //   console.warn("navigating to top");
        //   navigation.popToTop(); 
        //   navigation.navigate(navigation.state.routeName);
        // } else {
        //   navigation.navigate(routeName);
        //   console.warn("navigating to "+routeName);
        // }
      // },
    }),
    tabBarOptions: {
      activeTintColor: Colors.ember,
      inactiveTintColor: "#a8a8a8"
    }
  }
);
