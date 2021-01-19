import React from "react";
import { Container, Content } from "native-base";
import HeaderWithTitle from "../Components/HeaderWithTitle";

import AddAddressForm from "../Components/AddAddressForm";
const AddAddress = ({
  closeModal,
  addAddress,
  countries,
  states,
  cities,
  getCities
}) => {
  return (
    <Container>
      <HeaderWithTitle title="Add New Address" />
      <Content padder>
        <AddAddressForm
          closeModal={closeModal}
          onSubmit={addAddress}
          countries={countries}
          states={states}
          cities={cities}
          getCities={getCities}
          isModal={true}
        />
      </Content>
    </Container>
  );
};

export default AddAddress;
