import React from "react";
import { connect } from "react-redux";
import { Header, Body, Title, Icon, Left, Button, Right } from "native-base";
import { View, TouchableOpacity } from "react-native";
import styles from "./Styles/HeaderWithTitle";
import ReferralIcon from "./ReferralIcon";
import OffersIcon from "./OffersIcon";
import colors from "../Themes/Colors";

const CustomHeader = ({ title, root, navigation, token }) => {
  // console.warn("token is:--" + token);

  return (
    <View style={{ paddingBottom: 10 }}>
      <Header style={styles.header} noShadow noLeft={root}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon type="MaterialIcons" style={{ color: colors.ember }} name="keyboard-backspace" />
          </Button>
        </Left>
        <Body>
          <Title style={{ fontSize: 18, color: colors.ember }}>{title}</Title>
        </Body>
        <Right>
          <ReferralIcon token={token} navigation={navigation} />
          <OffersIcon token={token} navigation={navigation} />
        </Right>
      </Header>
      <TouchableOpacity activeOpacity={.8}
        style={styles.locationBtn} onPress={() => {
          alert("navigating to location")
        }}>
        <Title style={{ fontSize: 15, color: "black" }}>
          Delivery Location (City | Pincode | V/NV)
        </Title>
      </TouchableOpacity>
    </View>
  )
};

const mapStateToProps = ({ authentication }) => ({
  token: authentication.token
});

export default connect(mapStateToProps, null)(CustomHeader);