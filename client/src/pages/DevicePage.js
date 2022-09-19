import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Image  from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import bigStar  from '../assets/bigStar.png';
import { fetchOneDevice } from "../http/deviceAPI";

const DevicePage = () =>
{
  const [device, setDevice] = useState({info: []});
  const {id} = useParams();
  useEffect(() =>
  {
    fetchOneDevice(id).then(data => setDevice(data))
  }, []);

  const [addBasket, setAddBasket] = useState([]);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image className='ms-1' width={300} height={300} src={process.env.REACT_APP_API_URL +  device.img}/>
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center pb-2 me-5">
            <h2 style={{textAlign: 'center'}}>{device.name}</h2>
            <div
              className='d-flex align-items-center justify-content-center'
              style=
              {
                {
                  background: `url(${bigStar}) no-repeat center center`,
                  width: 250, height: 240,
                  backgroundSize: 'cover',
                  fontSize: '4em'
                }
              }
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card 
            className='d-flex flex-column align-items-center justify-content-around'
            style={{width: 300, height: 300, fontsize: '2em', border: '5px solid lightgray'}}
          >
              <h3>От: {device.price} руб.</h3>
              <Button value={addBasket} onclick={e => setAddBasket(e.target.value)} variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h1>Характеристики</h1>
        {device.info.map((info, index) =>
          <Row
            className='p-3'
            key={info.id}
            style={{background: index % 2 === 0 ? 'lightgray' : 'transparent'}}
          >
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>
  );
}

export default DevicePage;
