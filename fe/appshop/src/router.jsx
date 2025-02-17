import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ROUTERS, ADMIN_PATH } from './utils/router';
import HomePage from './pages/users/homePage/HomePage';
import ProfilePage from './pages/users/profilePage/ProfilePage';
import ProductsPage from './pages/users/productsPage/ProductsPage';
import ProductDetailPage from './pages/users/productdetailPage/ProductDetailPage';
import MasterLayout from './pages/users/theme/masterlayout/MasterLayout';
import ShoppingCartPage from './pages/users/shoppingcartPage/ShoppingCartPage';
import CheckOutPage from './pages/users/checkoutPage/CheckOutPage';
import LoginPage from './pages/admin/loginPage/LoginPage';
import OrderPage from './pages/admin/orderPage/OrderPage'
import ProductPage from './pages/admin/productPage/ProductPage';
import { CartProvider } from "./context/CartContext";


const RenderUserRoutes = () => {
    const userRouters = [
        { path: ROUTERS.USER.HOME, component: <HomePage /> },
        { path: ROUTERS.USER.PROFILE, component: <ProfilePage /> },
        { path: ROUTERS.USER.PRODUCTS, component: <ProductsPage /> },
        { path: ROUTERS.USER.PRODUCT, component: <ProductDetailPage /> },
        { path: ROUTERS.USER.SHOPPINGCART, component: <ShoppingCartPage /> },
        { path: ROUTERS.USER.CHECKOUT, component: <CheckOutPage /> },
    ];

    return (
        <CartProvider>

            <MasterLayout>
                <Routes>
                    {userRouters.map((item, key) => (
                        <Route key={key} path={item.path} element={item.component} />
                    ))}
                </Routes>
            </MasterLayout>
        </CartProvider>
    );
};

const RenderAdminRoutes = () => {
    const adminRouters = [
        { path: ROUTERS.ADMIN.LOGIN, component: <LoginPage /> },
        { path: ROUTERS.ADMIN.ORDERS, component: <OrderPage /> },
        { path: ROUTERS.ADMIN.MANAGEPRODUCT, component: <ProductPage /> },



    ];


    return (
        <Routes>
            {adminRouters.map((item, key) => (
                <Route key={key} path={item.path} element={item.component} />
            ))}
        </Routes>
    );
};

const RouterCustom = () => {
    const location = useLocation();
    const isAdmin = location.pathname.startsWith(ADMIN_PATH);

    return isAdmin ? <RenderAdminRoutes /> : <RenderUserRoutes />;
};

export default RouterCustom;
