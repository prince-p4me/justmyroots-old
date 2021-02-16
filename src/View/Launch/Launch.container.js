import React, { Component } from "react";
import { connect } from "react-redux";
import shippingLocationActions from "../../Store/Redux/shippingLocation";
import cartActions from "../../Store/Redux/cart";
import LocationChangePage from "./LocationChange.page";
import { Toast } from "native-base";
class LocationChange extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   static navigationOptions = {
  //     title: "SELECT YOUR CUP",
  //     headerTitleStyle: { textAlign: "center", alignSelf: "center" }
  //   };
  componentDidMount() {
    console.log("LocationChange")
    this.props.shippingLocationsRequest();
  }

  shippingLocationSelected = location => {
    Toast.show({ text: "Your cart has been refreshed", duration: 3000, buttonText: "Okay" });
    this.props.setShippingLocationRequest(location);
    this.props.emptyCart();
    this.props.navigation.navigate("TabNavigator");
  };
  closeLocationSelector = () => {
    this.props.navigation.navigate("TabNavigator");
  };

  getShippingLocations = () => {
    if (Array.isArray(this.props.shippingLocations)) {
      return this.props.shippingLocations.map(location =>
        location.id == this.props.selectedShippingLocation.id
          ? { ...location, selected: true }
          : location
      )
    } else {
      return []
    }
  };

  render() {
    return (
      <LocationChangePage
        shippingLocations={this.getShippingLocations()}
        shippingLocationSelected={this.shippingLocationSelected}
        closeLocationSelector={this.closeLocationSelector}
        disabled={this.props.selectedShippingLocation.id ? false : true}
      />
    );
  }
}

const mapStateToProps = ({ shippingLocation }) => ({
  shippingLocations: shippingLocation.shippingLocations,
  selectedShippingLocation: shippingLocation.selectedShippingLocation
});

const mapDispatchToProps = { ...shippingLocationActions, ...cartActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationChange);
