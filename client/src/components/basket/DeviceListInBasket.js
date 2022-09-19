import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "../../index";
import DeviceInBasket from "./DeviceInBasket";

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
