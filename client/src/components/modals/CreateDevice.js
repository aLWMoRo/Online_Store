import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useContext } from "react";
import { Col, Dropdown, Form, Row, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { fetchBrands, fetchTypes } from "../../services/deviceAPI";
import { Context } from '../../index';

const CreateDevice = observer(({show, onHide}) =>
{
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const {device} = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () =>
    {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
    }
    const removeInfo = (number) =>
    {
        setInfo(info.filter(i => i.number !== number));
    }

    const selectFile = (e) =>
    {
        setFile(e.target.files[0]);
    }

    useEffect(() =>
    {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
    }, []);

    const changeInfo = (key, value, number) =>
    {
        setInfo(info.map(inf => inf.number === number ? {...inf, [key]: value} : inf));
    }

    const addDevice = () =>
    {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('typeId', `${device.selectedType.id}`);
        formData.append('brandId', `${device.selectedBrand.id}`);
        formData.append('info', `${JSON.stringify(info)}`);
        onHide();
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mb-2 mt-2'>
                        <Dropdown.Toggle
                            variant={'outline-dark'}
                            onChange={() => device.selectedType()}
                        >
                            {device.selectedType.name || 'Выберите тип'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id} onClick={() => device.setSelectedType(type)}>
                                    {type.name}
                                </Dropdown.Item>    
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mb-2 mt-2'>
                        <Dropdown.Toggle
                            variant={'outline-dark'}
                            onChange={() => device.selectedBrand()}
                        >
                            {device.selectedBrand.name || 'Выберите бранд'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id} onClick={() => device.setSelectedBrand(brand)}>
                                    {brand.name}
                                </Dropdown.Item>    
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='mt-3'
                        placeholder='Введите название устройства'
                    />
                    <Form.Control
                        alue={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className='mt-3'
                        placeholder='Введите стоимость устройства'
                        type='number'
                    />
                    <Form.Control
                        className='mt-3'
                        type='file'
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row key={i.number} className='mt-4'>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={e => changeInfo('title', e.target.value, i.number)}
                                    placeholder='Введите название характеристики' 
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={e => changeInfo('description', e.target.value, i.number)}
                                    placeholder='Введите описание характеристики' 
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={'outline-danger'}
                                >
                                    Удалить характеристику
                                </Button>
                            </Col>
                        </Row>    
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={addDevice} >Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;