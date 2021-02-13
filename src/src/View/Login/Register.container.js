import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/authentication";
import RegisterForm from "./RegisterForm";

import { Toast } from "native-base";
import moment from "moment";

class Register extends Component {
  register = form => {
    if (form.dob) {
      form.dob = moment(form.dob).format("DD/MM/YYYY");
    }
    if (form.anniversary) {
      form.anniversary = moment(form.anniversary).format("DD/MM/YYYY");
    }
    form.tempToken = this.props.tempToken;
    this.props.registerProfileRequest(form);
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { fetching, processed, tempToken, token } = nextProps;
    if (processed && !fetching) {
      this.props.navigation.popToTop(); // Reset all modal of modal stacks. (this is available since 1.0.0 I think).
      this.props.navigation.goBack(null); // Then close modal itself to display the main app screen nav.
      Toast.show({
        text: "Registered Successfully",
        buttonText: "Okay",
        duration: 3000
      });
    }

    return true;
  }

  render() {
    return (
      <RegisterForm
        onSubmit={this.register}
        mobile={this.props.mobile}
        fetching={this.props.fetching}
      />
    );
  }
}

const mapStateToProps = ({ authentication }) => ({
  fetching: authentication.fetching,
  processed: authentication.processed,
  mobile: authentication.mobile,
  tempToken: authentication.tempToken
});
const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
