import React, { Component } from "react";
// import { WebView } from "react-native-webview";
import actions from "../../Store/Redux/order";
import { connect } from "react-redux";
import LoadingIndicator from "../Components/LoadingIndicator";
import { Toast, Icon, Title } from "native-base";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, FlatList, Dimensions, ImageBackground } from "react-native";
// import Clipboard from '@react-native-community/clipboard';
import colors from "../Themes/Colors";
import NormalHeader from "../Components/NormalHeader";

let refferalImg = require('./../Assets/refferal.jpeg')


class Refferal extends Component {
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
                <View style={{ flex: 1 }}>
                    <ImageBackground source={refferalImg} resizeMode="cover"
                        style={{ height: Dimensions.get("window").height / 3.3, width: "100%" }} />
                    <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 12 }}>
                        <Title style={{ fontSize: 24, color: colors.ember }}>Your Referral Code</Title>
                        <TouchableOpacity activeOpacity={.7}
                            style={styles.shareBtn}>
                            <Title style={{ fontSize: 34, color: "white" }}>
                                JMR#01</Title>
                            <Icon style={{ color: "white" }}
                                type="MaterialIcons" name="content-copy" />
                        </TouchableOpacity>
                        <Text style={styles.text}>
                            Your unique refferral Code, refer a friend and earn JMR Points
                            every time they order from JustMyRoots and every time they refer further.
                        </Text>
                        <TouchableOpacity activeOpacity={.7}
                            style={styles.next} onPress={() => this.props.navigation.navigate("RefferalMore")}>
                            <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>
                                Know More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
)(Refferal);

const styles = StyleSheet.create({
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
        fontSize: 14, color: "black",
        fontWeight: "600", marginHorizontal: 18
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