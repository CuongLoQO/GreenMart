export const ADMIN_PATH = "/admin"
export const ROUTERS = {
    USER: {
        HOME: "/",
        PROFILE: "/profile",
        PRODUCTS: "/san-pham",
        PRODUCT: "/san-pham/chi-tiet/:id",
        SHOPPINGCART: "/gio-hang",
        CHECKOUT: "/thanh-toan",


    },
    ADMIN: {
        LOGIN: `${ADMIN_PATH}/login`,
        ORDERS: `${ADMIN_PATH}/dat-hang`,
        MANAGEPRODUCT: `${ADMIN_PATH}/quan-ly-san-pham`

    }
};