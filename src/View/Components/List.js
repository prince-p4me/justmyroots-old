import React from "react";
import { Container, Content } from "native-base";
import FilterList from "./FilterList";
import ItemList from "./ItemList";

const List = ({ filters, items, itemClicked, filterClicked }) => (
  <Container>
    <Content>
      <FilterList filters={filters} filterClicked={filterClicked} />
      <ItemList items={items} itemClicked={itemClicked} />
    </Content>
  </Container>
);

export default List;
