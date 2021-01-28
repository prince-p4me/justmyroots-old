import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Body, Title, Icon, Left, Button, Right } from "native-base";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import styles from "./Styles/HeaderWithTitle";
import ReferralIcon from "./ReferralIcon";
import OffersIcon from "./OffersIcon";
import Colors from "../Themes/Colors";
// import Icon from "react-native-vector-icons/FontAwesome";
class CustomHeader extends Component {
  state = {
    category: "",
    pincode: ""
  }

  setCategory = category => {
    this.setState({ category });
  }

  render() {
    const { category, pincode } = this.state;
    const { title, root, navigation, token, location } = this.props;
    return (
      <View style={{ paddingBottom: 10 }}>
        <Header style={styles.header} noShadow noLeft={root}>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon type="MaterialIcons" style={{ color: Colors.ember }} name="keyboard-backspace" />
            </Button>
          </Left>
          <Body>
            <Title style={{ fontSize: 18, color: Colors.ember }}>{title}</Title>
          </Body>
          <Right>
            <ReferralIcon token={token} navigation={navigation} />
            <OffersIcon token={token} navigation={navigation} />
          </Right>
        </Header>
        <View activeOpacity={.8} style={styles.locationView}>
          <TouchableOpacity style={styles.locationBtn} onPress={() => {
            navigation.navigate("LaunchNavigator");
          }}>
            <Title style={{ fontSize: 14, color: Colors.charcoal }}>{location?.name}</Title>
            <Icon type="FontAwesome" style={{
              color: Colors.charcoal,
              position: "absolute", top: -10, right: 10
            }} name="sort-down" />
          </TouchableOpacity>
          <TextInput style={styles.pincodeBOx}
            placeholder="Pin Code"
            placeholderTextColor={Colors.charcoal}
            value={pincode}
            onChangeText={pincode => this.setState({ pincode })}
            maxLength={8}
            keyboardType="numeric"
            returnKeyLabel="Done"
            returnKeyType="done"></TextInput>
          <TouchableOpacity activeOpacity={.8} style={[styles.vgBtn, {
            backgroundColor: category == "V" ? Colors.leaf : Colors.charcoal
          }]} onPress={() => this.setCategory("V")}>
            <Title style={{ fontSize: 14, color: Colors.text }}>Veg</Title>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.8} style={[styles.vgBtn, {
            backgroundColor: category == "NV" ? Colors.ember : Colors.charcoal
          }]} onPress={() => this.setCategory("NV")}>
            <Title style={{ fontSize: 14, color: Colors.text }}>Non-Veg</Title>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
// const CustomHeader = ({ title, root, navigation, token, location }) => {
//   // console.warn("token is:--" + token);
//   const [category, setCategory] = useState("");


// };

const mapStateToProps = ({ authentication, shippingLocation }) => ({
  token: authentication.token,
  location: shippingLocation.selectedShippingLocation
});

export default connect(mapStateToProps, null)(CustomHeader);