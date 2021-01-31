import React, { Component } from "react";
// import { WebView } from "react-native-webview";
import actions from "../../Store/Redux/order";
import { connect } from "react-redux";
import LoadingIndicator from "../Components/LoadingIndicator";
import { Toast, Icon, Title } from "native-base";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from "react-native";
// import Clipboard from '@react-native-community/clipboard';
import colors from "../Themes/Colors";
import NormalHeader from "../Components/NormalHeader";

let refferalImg = require('./../Assets/refferal.jpeg');
let refferalImg2 = require('./../Assets/refferal2.jpeg');
let bridgeImg = require('./../Assets/bridge.jpeg');


class RefferalMore extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount = async () => {
        // let response = await axios.get('xyz')
    }

    render() {
        return (
            <View style={{ height: '100%', width: "100%", backgroundColor: "white" }}>
                <SafeAreaView />
                <NormalHeader title="REFFERRAL" navigation={this.props.navigation} />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <ImageBackground source={refferalImg} resizeMode="cover"
                        style={{ height: Dimensions.get("window").height / 3.3, width: "100%" }} />
                    <View style={{ paddingTop: 20, paddingHorizontal: 12 }}>
                        <Title style={{ fontSize: 24, color: colors.ember }}>Your Referral Code</Title>
                        <TouchableOpacity activeOpacity={.7}
                            style={styles.shareBtn}>
                            <Title style={{ fontSize: 34, color: "white" }}>
                                JMR#01</Title>
                            <Icon style={{ color: "white" }}
                                type="MaterialIcons" name="content-copy" />
                        </TouchableOpacity>
                        <Text style={styles.text}>
                            JMR REFFERRAL  Program is a unique Refferal Program, that  gives
                            you a opportunity to earn every time your Refferral Orders from JustMyRoots.
                        </Text>
                    </View>
                    <ImageBackground source={bridgeImg} resizeMode="contain"
                        style={{ height: 170, width: "100%", marginVertical: 15 }} />
                    <Text style={styles.heading}>How does JMR REFFERRAL works?</Text>
                    <ImageBackground source={refferalImg2} resizeMode="contain"
                        style={{ height: 170, width: "100%", marginVertical: 15 }} />
                    <Text style={[styles.text, { marginBottom: 20 }]}>
                        Invite people to download the app with your unique refferral code.
                        While they get 100 JMR Points upon signing up, you also get
                        100 JMR Points when they order their first meal
                        </Text>
                </ScrollView>
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
)(RefferalMore);

const styles = StyleSheet.create({
    heading: {
        fontSize: 24, marginRight: 22,
        color: colors.ember,
        marginLeft: 14,
        fontWeight: "700"
    },
    next: {
        backgroundColor: colors.ember,
        paddingBottom: 5,
        paddingTop: 8,
        paddingLeft: 10,
        paddingRight: 15,
        alignSelf: "flex-end",
        borderRadius: 6
    },
    text: {
        fontSize: 16,
        color: "black",
        fontWeight: "600",
        marginHorizontal: 18
    },
    shareBtn: {
        paddingVertical: 5, paddingLeft: 30,
        width: "100%", flexDirection: "row",
        backgroundColor: colors.ember,
        borderRadius: 10, paddingRight: 10,
        alignItems: "center", marginVertical: 14,
        justifyContent: "space-between"
    }
})