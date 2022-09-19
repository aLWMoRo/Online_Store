import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './index';
import AppRouter from './components/route/AppRouter';
import NavigateBar from './components/navigate/NavigateBar';
import { check } from './services/userAPI';
import './assets/styles/App.css';

const App = observer(() =>
{
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() =>
  {
    check().then(_ =>
    {
      user.setUser(true);
      user.setIsAuth(true)
    }).finally(() => setLoading(false));
  }, [])

  if (loading)
  {
    return <Spinner animation={'grow'} />
  }

  return (
    <BrowserRouter>
      <NavigateBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
