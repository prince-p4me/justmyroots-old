import React, { Component } from "react";
// import { WebView } from "react-native-webview";
import actions from "../../Store/Redux/order";
import { connect } from "react-redux";
import LoadingIndicator from "../Components/LoadingIndicator";
import { Toast, Icon } from "native-base";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, FlatList, Dimensions } from "react-native";
// import Clipboard from '@react-native-community/clipboard';
import colors from "../Themes/Colors";
import NormalHeader from "../Components/NormalHeader";

let offerIcon = require('./../Assets/coupons.png')


class Offers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                codeType: "New User",
                couponCode: 'JMR',
                heading: "lakshay kukreja is a good boy",
                description: "us e my this code this will help ypu alot us e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alot"
            },
            {
                codeType: "Kochi Product",
                couponCode: 'JMR 1',
                heading: "lakshay kukreja is a good boy",
                description: "us e my this code this will help ypu alot us e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alot"
            },
            {
                codeType: "For Delhi Only",
                couponCode: 'JMR 2',
                heading: "lakshay kukreja is a good boy",
                description: "us e my this code this will help ypu alot us e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alot"
            }, {
                codeType: "Bangal",
                couponCode: 'JMR 3',
                heading: "lakshay kukreja is a good boy",
                description: "us e my this code this will help ypu alot us e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alot"
            }]
        };
    }
    componentDidMount = async () => {
        // let response = await axios.get('xyz')
    }

    copyCode = async (item) => {
        await Clipboard.setString(item.couponCode);
    }

    OfferList = ({ item }) => {
        return (
            <View style={{ marginTop: 8 }}>
                <TouchableOpacity style={{
                    height: 40, width: "90%",
                    backgroundColor: colors.ember, borderRadius: 5,
                    marginHorizontal: "5%", flexDirection: "row",
                    paddingHorizontal: "4%"
                }}
                    onPress={() => {
                        // this.copyCode(item);
                    }}>
                    <View style={{ flex: 5, justifyContent: "center", }}>
                        <Text style={{ color: 'white', fontSize: 20 }}> {item.codeType}</Text>
                    </View>
                    <View style={{ flex: 5, marginLeft: '5%', flexDirection: "row" }}>
                        <View style={{
                            flex: 1, justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Text style={{
                                color: 'white', fontWeight: 'bold',
                                fontSize: 20
                            }}> {item.couponCode}</Text>
                        </View>
                        <View style={{
                            flex: 1, justifyContent: "center",
                            alignItems: "flex-end"
                        }}>
                            <Icon style={{ color: "white" }}
                                type="MaterialIcons" name="content-copy" />
                        </View>
                    </View>
                </TouchableOpacity>
                <Text style={{
                    marginTop: 8, marginHorizontal: "5%",
                    fontWeight: "bold", color: "black"
                }}>{item.heading}</Text>
                <Text style={{
                    marginTop: 8, alignSelf: "center",
                    color: "black", marginHorizontal: "5%"
                }}>{item.description}</Text>
                <Text style={{
                    marginTop: 8, color: colors.ember,
                    marginHorizontal: "5%"
                }}>Standard T&C Apply</Text>
                <View style={{
                    marginTop: 8, height: 3,
                    backgroundColor: colors.ember, width: "100%"
                }} />
            </View>

        )
    }

    render() {
        return (
            <View style={{ height: '100%', width: "100%", backgroundColor: "white" }}>
                <SafeAreaView />
                <NormalHeader title="OFFERS" navigation={this.props.navigation} />
                <FlatList
                    contentContainerStyle={{ flexGrow: 1 }}
                    ListHeaderComponent={() => (
                        <View style={{ height: Dimensions.get("window").height / 3 }}>
                            <View style={{ flex: 2 }}>
                                <Image source={offerIcon} style={{ height: "100%", width: "100%" }}
                                    resizeMode="stretch" />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{
                                    fontWeight: 'bold', fontSize: 40,
                                    color: colors.ember, alignSelf: "center"
                                }}>JMR COUPONS</Text>
                                <View style={{
                                    height: 2.5, width: "100%",
                                    backgroundColor: colors.ember, marginTop: 5
                                }} />
                            </View>
                        </View>
                    )}
                    data={this.state.data}
                    renderItem={this.OfferList}
                    keyExtractor={(id, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }
}

const mapStateToProps = ({ order }) => ({
    orderId: order.orderId,
    paymentStatus: order.paymentStatus
});

const mapDispatchToProps = actions;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Offers);