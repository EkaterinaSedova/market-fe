import AboutPage from "../components/AboutPage/AboutPage";
import AuthorizationPage from "../components/AuthorizationPage/AuthorizationPage";
import ItemPage from "../components/ItemPage/ItemPage";
import MainPage from "../components/MainPage/MainPage";
import ProfilePage from "../components/ProfilePage/ProfilePage";
import { LOGIN_ROUTE, MAIN_ROUTE, PRODUCT_ROUTE, REGISTRATE_ROUTE, SERVICE_ROUTE, START_ROUTE } from "./paths";

export const publicRoutes = [
    {
        path: START_ROUTE,
        Component: AboutPage,
    },
    {
        path: LOGIN_ROUTE,
        Component: AuthorizationPage,
    },
    {
        path: REGISTRATE_ROUTE,
        Component: AuthorizationPage,
    },
]

export const authRoutes = [
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ItemPage,
    },
    {
        path: SERVICE_ROUTE + '/:id',
        Component: ItemPage,
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProfilePage,
    },
    {
        path: MAIN_ROUTE,
        Component: MainPage,
    }
]