import React, { useState } from "react";
import { Button, Card, Col  } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import star from '../../assets/images/star.png';
import { DEVICE_ROUTE } from "../../utils/consts";

const DeviceInBasket = ({device}) =>
{
    const [isRemoved, setIsRemoved] = useState(false);

    const removeDevice = () =>
    {
        // setIsRemoved(true);
    }

    const navigate = useNavigate()
    return (
        <Col md={3} className={'mt-3'} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'poster'}} border={'light'}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
                <div className='mt-1 d-flex justify-content-between align-items-center p-2'>
                    <div className='d-flex align-items-center'>
                        <div>{device.name}</div>
                        <div className={'ms-5'}>{device.rating}</div>
                        <Image width={18} height={18} src={star} />
                    </div>
                </div>
            </Card>
            <Button className='p-2 mt-4' variant={'outline-dark'} onClick={removeDevice}>Убрать из корзины</Button>
        </Col>  
    );
};

export default DeviceInBasket;