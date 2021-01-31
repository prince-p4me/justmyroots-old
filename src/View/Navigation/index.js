import TabNavigator from "./TabNavigator";
import LaunchNavigator from "./LaunchNavigator";

import { createStackNavigator } from "react-navigation";
import LoginNavigator from "./LoginNavigator";
import OffersScreen from "../Offers/index";
import Refferal from "../Refferal";
import RefferalMore from "../RefferalMore";

const initialNavigator = createStackNavigator(
  {
    TabNavigator: { screen: TabNavigator },
    LaunchNavigator: { screen: LaunchNavigator },
    LoginNavigator: { screen: LoginNavigator },
    Offers: { screen: OffersScreen },
    Refferal: { screen: Refferal },
    RefferalMore: { screen: RefferalMore }
  },
  {
    initialRouteName: "TabNavigator",
    // initialRouteName: "RefferalMore",
    headerMode: "none"
  }
);

export default initialNavigator;
