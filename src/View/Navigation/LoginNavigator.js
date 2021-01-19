import { createStackNavigator } from "react-navigation";
import Login from "../Login/Login.container";
import Otp from "../Login/Otp.container";
import Register from "../Login/Register.container";
import { Colors } from "../Themes";
import { Platform } from "react-native";

const LoginNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: "Login"
      }
    },
    Otp: {
      screen: Otp,
      navigationOptions: {
        title: "OTP"
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        title: "Register"
      }
    }
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      headerTintColor: Colors.charcoal,
      headerTitleStyle: {
        ...Platform.select({
          ios: { fontFamily: "Arial" },
          android: { fontFamily: "Roboto" }
        })
      }
    }
  }
);

export default LoginNavigator;
