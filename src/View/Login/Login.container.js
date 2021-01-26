import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/authentication";
import LoginForm from "./LoginForm";

class Login extends Component {
  sendOtp = ({ mobile }) => {
    this.props.sendOtpRequest({ mobile });
  };
  componentDidMount() {
    this.props.resetLogin();
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { processed } = nextProps;
    if (processed) {
      this.props.navigation.navigate("Otp");
    }
    return true;
  }
  render() {
    return <LoginForm onSubmit={this.sendOtp} fetching={this.props.fetching} />;
  }
}
const mapStateToProps = ({ authentication }) => ({
  fetching: authentication.fetching,
  processed: authentication.processed
});
const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
