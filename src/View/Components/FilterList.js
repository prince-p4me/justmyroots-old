import React from "react";
import {Image,View} from "react-native";
import { FlatList } from "react-native";
import FilterItem from "./FilterItem";
import filterIcon from "../../View/Assets/filter.png";
import colors from "../Themes/Colors";
// import Label from "./Label";

const componentName = ({ filters, filterClicked }) => {
  return (
    <FlatList
      data={filters}
      horizontal={true}
      ListHeaderComponent={(<View style={{padding:11,
      borderRadius:15,borderColor: colors.lightCharcoal,
      borderWidth: 1,marginLeft:10,marginTop:5,
      borderRadius: 25}}>
        <Image source={filterIcon} style={{width:16,height:16,resizeMode:"contain",tintColor:colors.ember}}></Image>
      </View>)}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <FilterItem item={item} filterClicked={filterClicked} />
      )}
    />
  );
};

export default componentName;
