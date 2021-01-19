import React from "react";
import { Text, View } from "react-native";
import { ActivityIndicator } from "react-native";
import styles from "./Styles/LoadingIndicator";

const LoadingIndicator = () => (
  <View style={styles.container}>
    <ActivityIndicator />
  </View>
);

export default LoadingIndicator;
