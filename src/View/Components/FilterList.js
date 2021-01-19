import React from "react";
import { FlatList } from "react-native";
import FilterItem from "./FilterItem";

const componentName = ({ filters, filterClicked }) => {
  return (
    <FlatList
      data={filters}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <FilterItem item={item} filterClicked={filterClicked} />
      )}
    />
  );
};

export default componentName;
