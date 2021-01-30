import React from "react";
import { Container, Content } from "native-base";
import { Dimensions } from "react-native";
import DeliveryLocation from "../Components/DeliveryLocation";
import BannerList from "../Components/BannerList";
import HeaderWithTitle from "../Components/HeaderWithTitle";
import CustomHeader from "../Components/CustomHeader";
// import Slideshow from 'react-native-slideshow';
import { FlatListSlider } from 'react-native-flatlist-slider';
import colors from "../Themes/Colors";

const Home = ({ banners, bannerClicked, navigation, locationClicked }) => {
  return (
    <Container>
      <CustomHeader title="Home" root={true} navigation={navigation} />
      <Content>
        {/* <DeliveryLocation
          location={location}
          locationClicked={locationClicked}
        /> */}
        {/* <Slideshow dataSource={banners}
          onPositionChanged={position => bannerClicked(banners[position])} /> */}
        {/* <BannerList items={banners} bannerClicked={bannerClicked} /> */}
        <FlatListSlider
          data={banners}
          height={(Dimensions.get("window").height) / 3.5}
          timer={3000}
          onPress={index => {
            console.log(JSON.stringify(index));
            bannerClicked(banners[index]);
          }}
          contentContainerStyle={{ paddingHorizontal: 2 }}
          indicatorContainerStyle={{ position: 'absolute', bottom: 10 }}
          indicatorActiveColor={colors.ember}
          indicatorInActiveColor={'#ffffff'}
          indicatorActiveWidth={30}
          animation
        />
      </Content>
    </Container>
  );
};

export default Home;