import TabNavigator from "./TabNavigator";
import LaunchNavigator from "./LaunchNavigator";

import { createStackNavigator } from "react-navigation";
import LoginNavigator from "./LoginNavigator";
import OffersScreen from "../Offers/index";

const initialNavigator = createStackNavigator(
  {
    LaunchNavigator: { screen: LaunchNavigator },
    TabNavigator: { screen: TabNavigator },
    LoginNavigator: { screen: LoginNavigator },
    Offers: { screen: OffersScreen }
  },
  {
    initialRouteName: "TabNavigator",
    headerMode: "none"
  }
);

export default initialNavigator;
