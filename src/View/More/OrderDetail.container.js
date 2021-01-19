import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/myOrder";
import OrderDetailPage from "./OrderDetail.page";
import LoadingIndicator from "../Components/LoadingIndicator";

class OrderDetail extends Component {
  render() {
    return this.props.order ? (
      <OrderDetailPage order={this.props.order} />
    ) : (
      <LoadingIndicator />
    );
  }
}

const mapStateToProps = ({ myOrder }) => ({
  order: myOrder.order
});

const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetail);
