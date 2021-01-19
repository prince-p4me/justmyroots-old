import { createStackNavigator } from "react-navigation";
import Cart from "../Cart/Cart.container";
import SelectDeliveryDate from "../Cart/SelectDeliveryDate.container";
import SelectTimeSlot from "../Cart/SelectTimeSlot.container";
import SelectBagType from "../Cart/SelectBagType.container";
import SelectGiftingType from "../Cart/SelectGiftingType.container";
import SelectOption from "../Product/SelectOption.container";
import SetPreferenceText from "../Product/SetPreferenceText.container";
import MultiSelect from "../Product/MultiSelect.container";
import { Colors } from "../Themes";

const CartModalNavigator = createStackNavigator(
  {
    Cart: {
      screen: Cart,
      navigationOptions: {
        title: "Cart"
      }
    },
    SelectDeliveryDate: {
      screen: SelectDeliveryDate,
      navigationOptions: {
        title: "Select Delivery Date"
      }
    },
    SelectTimeSlot: {
      screen: SelectTimeSlot,
      navigationOptions: {
        title: "Select Time Slot"
      }
    },
    SelectBagType: {
      screen: SelectBagType,
      navigationOptions: {
        title: "Select Bag"
      }
    },
    SelectGiftingType: {
      screen: SelectGiftingType,
      navigationOptions: {
        title: "Select Gifting Option"
      }
    },
    SetPreferenceText: {
      screen: SetPreferenceText,
      navigationOptions: {
        title: "Set Preferences"
      }
    },
    SelectOption: {
      screen: SelectOption,
      navigationOptions: {
        title: "Select Option"
      }
    },
    MultiSelect: {
      screen: MultiSelect,
      navigationOptions: {
        title: "Select Option"
      }
    }
  },
  {
    initialRouteName: "Cart",
    mode: "modal",
    headerMode: "none"
  }
);

export default CartModalNavigator;
