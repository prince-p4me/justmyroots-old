import React from "react";
import { Container, Content, Icon, Title, View } from "native-base";
import { Dimensions, FlatList, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";
import DeliveryLocation from "../Components/DeliveryLocation";
import BannerList from "../Components/BannerList";
import HeaderWithTitle from "../Components/HeaderWithTitle";
import CustomHeader from "../Components/CustomHeader";
// import Slideshow from 'react-native-slideshow';
import { FlatListSlider } from 'react-native-flatlist-slider';
import colors from "../Themes/Colors";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Home = ({ banners, bannerClicked, navigation, options, optionClicked, categories, categoryClicked }) => {
  console.log("categories ", categories);
  return (
    <Container>
      <CustomHeader title="Home" root={true} navigation={navigation} />
      <Content>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* <DeliveryLocation
          location={location}
          locationClicked={locationClicked}
        /> */}
          {/* <Slideshow dataSource={banners}
          onPositionChanged={position => bannerClicked(banners[position])} /> */}
          {/* <BannerList items={banners} bannerClicked={bannerClicked} /> */}
          {(banners && banners.length) ? <FlatListSlider data={banners ? banners : []}
            height={height / 3.3}
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
          /> : null}
          <FlatList data={options}
            horizontal={true}
            contentContainerStyle={{
              height: 150,
              padding: 7,
            }}

            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                < TouchableOpacity activeOpacity={.7} style={styles.optionBtn}
                  onPress={() => optionClicked(item)}>
                  <Image source={{ uri: item.url }} style={{ flex: 1, resizeMode: "cover" }}></Image>
                  {/* <View style={styles.explore}>
                    <Title style={{ color: "white", fontSize: 14 }}>Explore Now</Title>
                    <Icon type="FontAwesome" style={{
                      color: "white"
                    }} name="angle-double-right" />
                  </View> */}
                </TouchableOpacity>
              )
            }}
          ></FlatList>
          <FlatList data={categories}
            horizontal={true}
            contentContainerStyle={{
              height: 120, padding: 7,
              paddingTop: 0
            }}

            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                < TouchableOpacity activeOpacity={.7} style={[styles.optionBtn, {
                  width: (width - 56) / 4,
                }]}
                  onPress={() => categoryClicked(item)}>
                  <Image source={{ uri: item.url }} style={{ flex: 1, resizeMode: "cover" }}></Image>
                </TouchableOpacity>
              )
            }}
          ></FlatList>
        </ScrollView>
      </Content>
    </Container >
  );
};

export default Home;

const styles = StyleSheet.create({
  optionBtn: {
    width: (width - 42) / 2.3,
    height: "100%",
    margin: 7,
    // backgroundColor: "red",
    borderRadius: 10,
    overflow: "hidden"
  },
  explore: {
    height: 35, width: "100%",
    backgroundColor: "rgba(0, 0, 0, .7)",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // overflow: "hidden"
  }
})