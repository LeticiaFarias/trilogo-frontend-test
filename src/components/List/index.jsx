import React from "react";

import { Container } from "./styles";
import Card from "./../Card";

function List() {
  return (
    <Container>
      <header>Todo</header>

      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}

export default List;
