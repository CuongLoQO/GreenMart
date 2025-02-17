import { createContext, useContext, useState, useEffect } from "react";

// Tạo Context
const CartContext = createContext();

// Hook tùy chỉnh để sử dụng giỏ hàng
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Load giỏ hàng từ localStorage khi mở trang
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    // Hàm thêm sản phẩm vào giỏ hàng
    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            let newCart;
            if (existingItem) {
                newCart = prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                newCart = [...prevCart, { ...product, quantity: 1 }];
            }

            localStorage.setItem("cart", JSON.stringify(newCart)); // Cập nhật localStorage
            return newCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
