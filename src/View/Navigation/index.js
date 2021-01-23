import TabNavigator from "./TabNavigator";
import LaunchNavigator from "./LaunchNavigator";

import { createStackNavigator } from "react-navigation";
import LoginNavigator from "./LoginNavigator";

const initialNavigator = createStackNavigator(
  {
    LaunchNavigator: { screen: LaunchNavigator },
    TabNavigator: { screen: TabNavigator },
    LoginNavigator: { screen: LoginNavigator}
  },
  {
    initialRouteName: "TabNavigator",
    headerMode: "none"
  }
);

export default initialNavigator;
