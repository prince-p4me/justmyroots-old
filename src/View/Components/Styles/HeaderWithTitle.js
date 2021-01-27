import { StyleSheet, Dimensions } from "react-native";
import { Fonts, Metrics, Colors } from "../../Themes";

const styles = StyleSheet.create({
  text: {
    color: Colors.charcoal
  },
  header: {
    backgroundColor: Colors.snow
  },
  locationBtn: {
    borderWidth: 2, borderRadius: 10,
    width: "100%",
    borderColor: Colors.ember,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: Dimensions.get("window").width - 20,
    marginHorizontal: 8
  }
});

export default styles;
