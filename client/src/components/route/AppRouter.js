import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Context } from '../../index';
import { authRoutes, publicRoutes } from '../../store/routes';

const AppRouter = () =>
{
    const {user} = useContext(Context);
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={Element} exact/>
            )}
            {publicRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={Element} exact/>
            )}
            <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
    );
}

export default AppRouter;
