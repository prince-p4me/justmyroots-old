import React, { Component } from "react";
import { connect } from "react-redux";
import productActions from "../../Store/Redux/product";
import categoryActions from "../../Store/Redux/category";
import sourcingLocationActions from "../../Store/Redux/sourcingLocation";
import List from "../Components/List";
import Constants from "../../Services/Constant";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedFilterId: null };
  }
  parameters = { shippingLocationId: this.props.shippingLocation.id };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name
  });

  componentDidMount() {
    const itemId = this.props.navigation.state.params.itemId;
    switch (this.props.navigation.state.params.type) {
      case Constants.SOURCING_LOCATION:
        this.parameters = { ...this.parameters, sourcingLocationId: itemId };
        this.props.categoriesRequest(this.parameters);
        break;
      case Constants.COMMUNITY:
        this.parameters = { ...this.parameters, communityId: itemId };
        this.props.sourcingLocationsRequest(this.parameters);
        break;
      case Constants.CUISINE:
        this.parameters = { ...this.parameters, cuisineId: itemId };
        this.props.sourcingLocationsRequest(this.parameters);
        break;
      case Constants.SHOP:
        this.parameters = { ...this.parameters, shopId: itemId };
        break;
      case Constants.SUB_CATEGORY:
        this.parameters = { ...this.parameters, subCategoryId: itemId };
        this.props.sourcingLocationsRequest(this.parameters);
        break;

      default:
        break;
    }
    this.props.productsRequest(this.parameters);
  }

  itemClicked = item => {
    this.props.navigation.navigate("ProductDetail", {
      productId: item.id
    });
  };

  getFilters = () => {
    var filters = [];
    switch (this.props.navigation.state.params.type) {
      case Constants.SOURCING_LOCATION:
        filters = this.props.categories;
        break;
      case Constants.COMMUNITY:
      case Constants.CUISINE:
      case Constants.SUB_CATEGORY:
        filters = this.props.sourcingLocations;
        break;

      default:
        break;
    }
    return filters
      .map(item => ({
        ...item,
        selected: item.id == this.state.selectedFilterId ? true : false
      }))
      .sort((a, b) => (a.selected ? -1 : 1));
  };
  filterClicked = id => {
    if (id == this.state.selectedFilterId) {
      switch (this.props.navigation.state.params.type) {
        case Constants.SOURCING_LOCATION:
          this.parameters = { ...this.parameters, categoryId: null };
          break;
        case Constants.COMMUNITY:
        case Constants.CUISINE:
        case Constants.SUB_CATEGORY:
          this.parameters = { ...this.parameters, sourcingLocationId: null };
          break;

        default:
          break;
      }
      this.setState({ selectedFilterId: null });
    } else {
      switch (this.props.navigation.state.params.type) {
        case Constants.SOURCING_LOCATION:
          this.parameters = { ...this.parameters, categoryId: id };
          break;
        case Constants.COMMUNITY:
        case Constants.CUISINE:
        case Constants.SUB_CATEGORY:
          this.parameters = { ...this.parameters, sourcingLocationId: id };
          break;

        default:
          break;
      }
      this.setState({ selectedFilterId: id });
    }

    this.props.productsRequest(this.parameters);
  };
  render() {
    return (
      <List
        items={this.props.products}
        filters={this.getFilters()}
        itemClicked={this.itemClicked}
        filterClicked={this.filterClicked}
      />
    );
  }
}

const mapStateToProps = ({
  product,
  category,
  sourcingLocation,
  shippingLocation
}) => ({
  products: product.products,
  categories: category.categories,
  sourcingLocations: sourcingLocation.sourcingLocations,
  shippingLocation: shippingLocation.selectedShippingLocation
});

const mapDispatchToProps = {
  ...productActions,
  ...categoryActions,
  ...sourcingLocationActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
