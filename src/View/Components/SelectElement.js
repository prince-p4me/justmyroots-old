import React from "react";
import { Container, Content } from "native-base";
import RadioListForStrings from "./RadioListForStrings";
import RadioList from "./RadioList";
import Label from "./Label";
import ButtonWithLoader from "./ButtonWithLoader";

const SelectElement = ({
  items,
  itemClicked,
  title,
  isItemString,
  isMultiSelect,
  submitSelection
}) => {
  return (
    <Container>
      <Content padder>
        <Label text={title} />
        {isItemString ? (
          <RadioListForStrings items={items} itemClicked={itemClicked} />
        ) : (
          <RadioList items={items} itemClicked={itemClicked} />
        )}
        {isMultiSelect ? (
          <ButtonWithLoader title="Submit" onPress={submitSelection} />
        ) : null}
      </Content>
    </Container>
  );
};

export default SelectElement;
