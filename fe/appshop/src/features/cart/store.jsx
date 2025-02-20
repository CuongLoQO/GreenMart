
// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { getOrCreateUserId } from './userUtils';

// Hàm tải giỏ hàng từ localStorage
const loadFromLocalStorage = () => {
  const userId = getOrCreateUserId();
  try {
    const serializedState = localStorage.getItem(`cart-${userId}`);
    return serializedState ? JSON.parse(serializedState) : { userId, items: [] };
  } catch (e) {
    console.error('Could not load state from localStorage', e);
    return { userId, items: [] };
  }
};

// Khởi tạo state với dữ liệu giỏ hàng từ localStorage
const preloadedState = {
  cart: loadFromLocalStorage(),
};

// Cấu hình store Redux
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat((store) => (next) => (action) => {
      const result = next(action);
      // Sau mỗi hành động, lưu lại giỏ hàng vào localStorage
      const state = store.getState();
      const userId = state.cart.userId;
      localStorage.setItem(`cart-${userId}`, JSON.stringify(state.cart.items));
      return result;
    }),
});
