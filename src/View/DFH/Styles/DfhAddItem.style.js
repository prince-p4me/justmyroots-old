import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../../Themes";
const styles = StyleSheet.create({
  nextButton: {
    // ...Fonts.style.h6,
    backgroundColor: Colors.facebook,
    // fontWeight: "bold",
    marginTop: 30
  },
  cancelText: {
    color: Colors.facebook
  },
  labelText: {
    color: Colors.charcoal
  },
  placeHolderText: {
    color: Colors.lightCharcoal
  }
});

export default styles;
