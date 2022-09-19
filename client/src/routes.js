import Basket from "./pages/Basket";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts";

export const authRoutes =
[
    {
        path: ADMIN_ROUTE,
        Element: <Admin />
    },
    {
        path: BASKET_ROUTE,
        Element: <Basket />
    }
]

export const publicRoutes =
[
    {
        path: SHOP_ROUTE,
        Element: <Shop />
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Element: <DevicePage />
    },
    {
        path: REGISTRATION_ROUTE,
        Element: <Auth />
    },
    {
        path: LOGIN_ROUTE,
        Element: <Auth />
    }
]