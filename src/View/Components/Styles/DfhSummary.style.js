import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../../Themes";
const styles = StyleSheet.create({
  nextButton: {
    // ...Fonts.style.h6,
    backgroundColor: Colors.facebook,
    // fontWeight: "bold",
    marginTop: 30
  },
  addItemText: {
    color: Colors.facebook,
    ...Fonts.style.h5
  },
  listItem: {
    flex: 1,
    flexDirection: "column"
    // backgroundColor: "green"
  },
  shopLine3: {
    paddingTop: 10,
    flexDirection: "row"
  },
  left: {
    flex: 1,
    color: Colors.charcoal,
    fontSize: Fonts.size.medium
  },
  right: {
    color: Colors.charcoal,
    fontSize: Fonts.size.medium
  },
  leftBold: {
    flex: 1,
    // color: Colors.facebook,
    fontSize: Fonts.size.regular,
    fontWeight: "bold"
  },
  rightBold: {
    // color: Colors.facebook,
    fontSize: Fonts.size.regular,
    fontWeight: "bold"
  }
});

export default styles;
