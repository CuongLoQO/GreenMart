export const ADMIN_PATH = "/admin"
export const ROUTERS = {
    USER: {
        HOME: "/",
        PROFILE: "/profile",
        PRODUCTPAGES: "/san-pham",
        PRODUCTS: "/san-pham/:id",
        PRODUCT: "/san-pham/chi-tiet/:id",
        SHOPPINGCART: "/gio-hang",
        CHECKOUT: "/thanh-toan",
        Article: "/bai-bao"


    },
    ADMIN: {
        LOGIN: `${ADMIN_PATH}/login`,
        ORDERS: `${ADMIN_PATH}/dat-hang`,
        MANAGEPRODUCT: `${ADMIN_PATH}/quan-ly-san-pham`

    }
};