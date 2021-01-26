import React from "react";
import { Container, Text, Content, Right, ListItem, Body } from "native-base";
import DfhFromAddress from "../Components/DfhFromAddress";

import StepsIndicator from "./StepsIndicator.component";
const Dfh = ({
  goToNext,
  currentPosition,
  chooseLocation,
  location,
  fetching
}) => {
  return (
    <Container>
      <Content padder>
        <StepsIndicator currentPosition={currentPosition} />
        <ListItem onPress={chooseLocation}>
          <Body>
            <Text>{location}</Text>
            <Text note>Choose Pickup Location</Text>
          </Body>
          <Right />
        </ListItem>
        <DfhFromAddress
          onSubmit={goToNext}
          buttonText="Next"
          fetching={fetching}
        />
      </Content>
    </Container>
  );
};

export default Dfh;
