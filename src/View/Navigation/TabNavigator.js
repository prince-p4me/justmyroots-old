import { createBottomTabNavigator } from "react-navigation";
import CategoriesNavigator from "./CategoriesNavigator";
import ShopByNavigator from "./ShopByNavigator";
import DfhModalNavigator from "./DfhModalNavigator";
import ModalNavigator from "./ModalNavigator";
import LoginModalNavigator from "./LoginModalNavigator";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { Colors } from "../Themes";

export default createBottomTabNavigator(
  {
    Home: ModalNavigator,
    Categories: CategoriesNavigator,
    ShopBy: ShopByNavigator,
    DFH: DfhModalNavigator,
    More: LoginModalNavigator
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "home";
        } else if (routeName === "Categories") {
          iconName = "th";
        } else if (routeName === "ShopBy") {
          iconName = "shopping-bag";
        } else if (routeName === "DFH") {
          iconName = "gift";
        } else if (routeName === "More") {
          iconName = "info-circle";
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />

          // <Ionicons
          //   name={iconName}
          //   size={horizontal ? 20 : 25}
          //   color={tintColor}
          // />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: Colors.facebook,
      inactiveTintColor: "#a8a8a8"
    }
  }
);
