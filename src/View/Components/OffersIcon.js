import React from "react";
import { Icon, Text, View } from "native-base";
import styles from "./Styles/HeaderIcon";
import { TouchableOpacity,Image } from "react-native";
import discount from "../Assets/discount.png";
const OffersIcon = () => {
  return (
    <TouchableOpacity onPress={()=>{
      alert("navigating to offer")
    }} style={{ flexDirection: "row",paddingHorizontal:3,alignItems:"center" }}>
      <Image source={discount} style={{width:20,height:20,
        resizeMode:"contain",marginRight:2}}></Image>
      <Text style={{fontSize:12,color:"black",marginEnd:3}}>Offers</Text>
    </TouchableOpacity>
  );
};

export default OffersIcon;
