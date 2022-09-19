import React from "react";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import DeviceListInBasket from "../components/basket/DeviceListInBasket";

const Basket = () =>
{
  return (
    <Container>
      <Row>
        <Col md={12}>
          <DeviceListInBasket />
        </Col>
      </Row>
    </Container>
  );
}

export default Basket;
