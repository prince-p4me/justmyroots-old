import React from "react";
import { Container, Content } from "native-base";
import DeliveryLocation from "../Components/DeliveryLocation";
import BannerList from "../Components/BannerList";
import HeaderWithTitle from "../Components/HeaderWithTitle";
import CustomHeader from "../Components/CustomHeader";

const Home = ({ banners, bannerClicked, navigation, locationClicked }) => {
  return (
    <Container>
      <CustomHeader title="Home" root={true} navigation={navigation} />
      <Content>
        {/* <DeliveryLocation
          location={location}
          locationClicked={locationClicked}
        /> */}
        <BannerList items={banners} bannerClicked={bannerClicked} />
      </Content>
    </Container>
  );
};

export default Home;
