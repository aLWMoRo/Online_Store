import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";
import DeviceInBasket from "../components/DeviceInBasket";

const DeviceListInBasket = () =>
{
  const {device} = useContext(Context);

  return (
    <Row className='d-flex m-2'>
        {device.devices.map(device =>
            <DeviceInBasket key={device.id} device={device} />
        )}
    </Row>
  );
}

export default DeviceListInBasket;
