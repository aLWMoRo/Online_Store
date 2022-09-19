import { Container } from 'react-bootstrap';
import React, { useContext, useEffect } from "react";
import { Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import BrandBar from '../components/brand/BrandBar';
import TypeBar from '../components/type/TypeBar';
import DeviceList from '../components/device/DeviceList';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchBrands, fetchDevices, fetchTypes } from '../services/deviceAPI';
import Pages from '../components/navigate/Pages';

const Shop = observer(() =>
{
  const {device} = useContext(Context);

  useEffect(() =>
  {
    fetchTypes().then(data => device.setTypes(data));
    fetchBrands().then(data => device.setBrands(data));
    fetchDevices().then(data =>
      {
        device.setDevices(data.rows);
        device.setTotalCount(data.count);
      });
  }, []);

  useEffect(() =>
  {
    fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit).then(data =>
      {
        device.setDevices(data.rows);
        device.setTotalCount(data.count);
      });
  }, [device.page, device.selectedType, device.selectedBrand]);

  return (
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
