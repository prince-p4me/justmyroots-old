import React, { Component } from "react";
import { connect } from "react-redux";
import addressActions from "../../Store/Redux/address";
import profileActions from "../../Store/Redux/profile";
import AddressPage from "./Address.page";
import Constants from "../../Services/Constant";
import { Toast } from "native-base";

class Address extends Component {
  componentDidMount() {
    this.fetchAddress();
  }

  fetchAddress = () => {
    let parameters = {
      shippingLocationId: this.props.shippingLocationId,
      token: this.props.token
    };
    if (this.props.navigation.state.params.type == Constants.SHIPPING_ADDRESS) {
      this.props.shippingAddressRequest(parameters);
    } else {
      this.props.billingAddressRequest(parameters);
    }
  };
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { newAddressCreated } = nextProps;
    if (newAddressCreated) {
      this.fetchAddress();
    }
    return true;
  }

  addAddress = () => {
    this.props.navigation.navigate("AddAddress");
    this.props.getProfileRequest({ token: this.props.token });
  };
  next = () => {
    if (this.props.navigation.state.params.type == Constants.SHIPPING_ADDRESS) {
      if (this.props.shippingAddresses.length > 0) {
        this.props.navigation.navigate("BillingAddress", {
          type: Constants.BILLING_ADDRESS,
          name: "Billing Address"
        });
      } else {
        Toast.show({
          text: "Shipping Address is Needed!",
          buttonText: "Okay",
          duration: 3000
        });
      }
    } else {
      if (this.props.shippingAddresses.length > 0) {
        this.props.navigation.navigate("OrderSummary");
      } else {
        Toast.show({
          text: "Billing Address is Needed!",
          buttonText: "Okay",
          duration: 3000
        });
      }
    }
  };

  selectAddress = address => {
    this.props.navigation.state.params.type == Constants.SHIPPING_ADDRESS
      ? this.props.selectShippingAddress(address.address_id)
      : this.props.selectBillingAddress(address.address_id);
  };

  static navigationOptions = {
    headerRight: null
  };

  render() {
    return (
      <AddressPage
        navigation={this.props.navigation}
        title={this.props.navigation.state.params.name}
        addresses={
          this.props.navigation.state.params.type == Constants.SHIPPING_ADDRESS
            ? this.props.shippingAddresses
            : this.props.billingAddresses
        }
        selectAddress={this.selectAddress}
        next={this.next}
        addAddress={this.addAddress}
      />
    );
  }
}

const mapStateToProps = ({ address, shippingLocation, authentication }) => ({
  shippingAddresses: address.shippingAddresses,
  billingAddresses: address.billingAddresses,
  newAddressCreated: address.newAddressCreated,
  shippingLocationId: shippingLocation.selectedShippingLocation.id,
  token: authentication.token
});

const mapDispatchToProps = { ...addressActions, ...profileActions };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Address);
