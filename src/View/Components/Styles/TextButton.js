import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../../Themes";
const styles = StyleSheet.create({
  text: {
    color: Colors.facebook,
    ...Fonts.style.h5
  }
});

export default styles;
