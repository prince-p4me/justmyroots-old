import DfhNavigator from "./DfhNavigator";
import LoginNavigator from "./LoginNavigator";

import { createStackNavigator } from "react-navigation";

const DfhModalNavigator = createStackNavigator(
  {
    DfhNavigator: {
      screen: DfhNavigator,
      navigationOptions: {
        title: "DFH"
      }
    },
    LoginNavigator: {
      screen: LoginNavigator,
      navigationOptions: {
        title: "OTP"
      }
    }
  },
  {
    initialRouteName: "DfhNavigator",
    mode: "modal",
    headerMode: "none"
  }
);

export default DfhModalNavigator;
