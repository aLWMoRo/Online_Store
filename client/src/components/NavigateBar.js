import { useContext } from "react";
import { Context } from "../index";
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const NavigateBar = observer(() =>
{

  const logOut =  () =>
  {
    user.setUser({});
    user.setIsAuth(false);
  }

    const {user} = useContext(Context);
    const navigate = useNavigate();
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Tool's store</NavLink>
          {
          user.isAuth ?
            <Nav className="ml-auto">
              <Button variant={"outline-light"} onClick={() => navigate(BASKET_ROUTE)}>
                Корзина
              </Button>
              <Button className="ms-2" variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>
                Админ панель
              </Button>
              <Button
                className="ms-2"
                variant={"outline-light"}
                onClick={() => logOut()}
              >
                Выйти
              </Button>
            </Nav>
          :
            <Nav className="ml-auto">
              <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
            </Nav>
          }
        </Container>
      </Navbar>
    );
});
export default NavigateBar;