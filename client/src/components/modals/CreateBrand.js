import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createBrand } from '../../services/deviceAPI';

const CreateBrand = ({show, onHide}) =>
{
    const [value, setValue] = useState('');
    const addBrand = () =>
    {
        createBrand({name: value}).then(_ =>
        {
            setValue('');
            onHide();
        });
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
                Добавить бранд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={'Введите название бранда'}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;