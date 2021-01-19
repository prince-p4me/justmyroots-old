import TabNavigator from "./TabNavigator";
import LaunchNavigator from "./LaunchNavigator";

import { createStackNavigator } from "react-navigation";

const initialNavigator = createStackNavigator(
  {
    LaunchNavigator: { screen: LaunchNavigator },
    TabNavigator: { screen: TabNavigator }
  },
  {
    initialRouteName: "TabNavigator",
    headerMode: "none"
  }
);

export default initialNavigator;
