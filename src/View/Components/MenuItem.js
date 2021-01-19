import React from "react";
import { Text, ListItem, Body, Right, Left, Icon } from "native-base";
import { Fonts, Metrics, Colors } from "../Themes";

const MenuItem = ({ menu }) => (
  <ListItem onPress={menu.menuClicked} icon>
    <Left>
      <Icon
        style={{ color: Colors.charcoal }}
        type="FontAwesome"
        name={menu.icon}
      />
    </Left>
    <Body>
      <Text>{menu.title}</Text>
    </Body>
    <Right>
      <Icon name="arrow-forward" />
    </Right>
  </ListItem>
);

export default MenuItem;
