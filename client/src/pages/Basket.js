import React from "react";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Context } from "..";
import DeviceListInBasket from "../components/DeviceListInBasket";

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
