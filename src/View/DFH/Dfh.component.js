import React from "react";
import { Container, Button, Text, Content, View, Icon } from "native-base";
import { TouchableOpacity } from "react-native";
import { FlatList, Image } from "react-native";
import styles from "./Styles/Dfh.style";
const Dfh = ({ navigation }) => {
  return (
    <Container>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Icon style={styles.giftIcon} type="FontAwesome" name="gift" />
          <Text style={styles.explanation}>
            Deliverting the essence of Home Cooking
          </Text>
          <Text style={styles.explanation}>Direct From Home</Text>
          {/* <Text style={styles.explanation}>Coming Soon!!</Text> */}
          <Button
            block
            style={styles.startOrderText}
            onPress={() => navigation.navigate("DfhFrom")}
          >
            <Text>START ORDER</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default Dfh;
