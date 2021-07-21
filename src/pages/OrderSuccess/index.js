import React from "react";
import { Container, Header, Content } from "./styles";
import Logo from "../../components/Logo";

const OrderSuccess = () => {
  return (
    <Container>
      <Header>
        <Logo></Logo>
      </Header>

      <Content>
        <h1>Prontinho! Agora seu pedido será preparado.</h1>
      </Content>
    </Container>
  );
};

export default OrderSuccess;
