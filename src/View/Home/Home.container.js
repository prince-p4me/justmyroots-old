import React, { Component } from "react";
import { connect } from "react-redux";
import categoryActions from "../../Store/Redux/category";
import bannerActions from "../../Store/Redux/banner";
import HomePage from "./Home.page";
import Constants from "../../Services/Constant";
import categories from '../../Fixtures/category.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopbyOptions: [
        {
          link_type: "cities",
          url: "https://rukminim1.flixcart.com/image/352/352/art-craft-kit/9/6/3/imagimake-mapology-states-of-india-original-imae6jcynzfd65ev.jpeg?q=70"
        }, {
          link_type: "brands",
          url: "https://s3.us-east-2.amazonaws.com/images.berkotfoods.com/Hexagons_Grocery/Berkots_Hexagon1_NameBrands.jpg"
        }, {
          link_type: "cities",
          url: "https://rukminim1.flixcart.com/image/352/352/art-craft-kit/9/6/3/imagimake-mapology-states-of-india-original-imae6jcynzfd65ev.jpeg?q=70"
        }, {
          link_type: "brands",
          url: "https://s3.us-east-2.amazonaws.com/images.berkotfoods.com/Hexagons_Grocery/Berkots_Hexagon1_NameBrands.jpg"
        }
      ],
      categories: categories
    };
  }

  static navigationOptions = {
    header: null
  }

  locationClicked = () => {
    this.props.navigation.navigate("LaunchNavigator");
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { shippingLocation } = nextProps;
    if (shippingLocation.id != this.props.shippingLocation.id) {
      this.props.bannersRequest(shippingLocation.id);
    }
    return true;
  }

  componentDidMount() {
    if (!this.props.shippingLocation.id) {
      this.props.navigation.navigate("LaunchNavigator");
    }
    let parameters = {
      shippingLocationId: this.props.shippingLocation.id
    };
    this.props.bannersRequest(this.props.shippingLocation.id);
  }

  bannerClicked = item => {
    console.log(JSON.stringify(item))
    switch (item.link_type) {
      case "P":
        this.props.navigation.navigate("ProductDetail", {
          productId: item.param
        });
        break;
      case "C":
        this.props.navigation.navigate("SubCategories", {
          type: Constants.SUB_CATEGORY,
          categoryId: item.param,
          name: item.heading
        });
        break;
      case "SC":
        this.props.navigation.navigate("ProductList", {
          type: Constants.SUB_CATEGORY,
          itemId: item.param,
          name: item.heading
        });
        break;
      case "CM":
        this.props.navigation.navigate("ProductList", {
          type: Constants.COMMUNITY,
          itemId: item.param,
          name: item.heading
        });
        break;
      default:
        break;
    }
    // this.props.navigation.navigate("ProductList", {
    //   itemId: id,
    //   type: this.props.navigation.state.params.type
    // });
  };

  optionClicked = item => {
    console.log(JSON.stringify(item))
    switch (item.link_type.toLowerCase()) {
      case "cities":
        this.props.navigation.navigate("ShopBy", {
          type: Constants.SOURCING_LOCATION
        });
        break;
      case "brands":
        this.props.navigation.navigate("ShopBy", {
          type: Constants.SHOP
        });
        break;
      default:
        break;
    }
  }

  categoryClicked = item => {
    console.log(JSON.stringify(item))
    switch (item.link_type.toLowerCase()) {
      case "dfh":
        this.props.navigation.navigate("Dfh");
        break;
      case "category":
        this.props.navigation.navigate("SubCategories", {
          type: Constants.SUB_CATEGORY,
          categoryId: item.id,
          name: item.name
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <HomePage
        navigation={this.props.navigation}
        banners={this.props.banners}
        bannerClicked={this.bannerClicked}
        options={this.state.shopbyOptions}
        optionClicked={this.optionClicked}
        categories={this.state.categories}
        categoryClicked={this.categoryClicked}
      // locationClicked={this.locationClicked}
      />
    );
  }
}

const mapStateToProps = ({ category, banner, shippingLocation }) => ({
  categories: category.categories,
  banners: banner.banners,
  shippingLocation: shippingLocation.selectedShippingLocation
});

const mapDispatchToProps = { ...categoryActions, ...bannerActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
