import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/authentication";
import MorePage from "./More.page";
import { Toast } from "native-base";

class More extends Component {
  logout = () => {
    this.props.logout();
    Toast.show({
      text: "Logged Out",
      buttonText: "Okay",
      duration: 3000
    });
  };

  menu = {
    profile: {
      icon: "user",
      title: "My Profile",
      menuClicked: () => this.props.navigation.navigate("Profile")
    },
    login: {
      icon: "power-off",
      title: "Login",
      menuClicked: () => this.props.navigation.navigate("Login")
    },
    myOrders: {
      icon: "gift",
      title: "My Orders",
      menuClicked: () => this.props.navigation.navigate("MyOrders")
    },
    logout: {
      icon: "power-off",
      title: "Logout",
      menuClicked: this.logout
    }
  };
  render() {
    return (
      <MorePage
        menu={this.menu}
        navigation={this.props.navigation}
        token={this.props.token}
        logout={this.logout}
      />
    );
  }
}

const mapStateToProps = ({ authentication }) => ({
  token: authentication.token
});

const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(More);
