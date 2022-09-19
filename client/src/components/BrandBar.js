import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const BrandBar = observer(() =>
{
    const {device} = useContext(Context);
    return (
        <Row className='d-flex align-items-center'>
            {device.brands.map(brand =>
                <Card
                    style={{cursor: 'pointer', width: '120px'}}
                    key={brand.id}
                    className='p-3'
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>  
    );
});

export default BrandBar;