
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [], // Mảng chứa các sản phẩm trong giỏ hàng
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     // Thêm sản phẩm vào giỏ hàng
//     addItem: (state, action) => {
//       const newItem = action.payload;
//       const existingItem = state.items.find((item) => item.id === newItem.id);

//       if (existingItem) {
//         // Nếu sản phẩm đã tồn tại, tăng số lượng
//         existingItem.quantity += 1;
//       } else {
//         // Nếu sản phẩm chưa tồn tại, thêm mới với số lượng mặc định là 1
//         state.items.push({ ...newItem, quantity: 1 });
//       }
//     },

//     // Xóa sản phẩm khỏi giỏ hàng
//     removeItem: (state, action) => {
//       const itemId = action.payload;
//       state.items = state.items.filter((item) => item.id !== itemId);
//     },

//     // Cập nhật số lượng sản phẩm
//     updateQuantity: (state, action) => {
//       const { id, quantity } = action.payload;
//       const item = state.items.find((item) => item.id === id);

//       if (item) {
//         item.quantity = quantity;
//       }
//     },
//   },
// });

// export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// export default cartSlice.reducer;

// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getOrCreateUserId } from './userUtils';

// Lấy userId từ localStorage (hoặc tạo mới nếu không có)
const userId = getOrCreateUserId();

// Hàm lưu giỏ hàng vào localStorage
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.items);
    localStorage.setItem(`cart-${userId}`, serializedState);
  } catch (e) {
    console.error('Could not save state to localStorage', e);
  }
};

// Hàm tải giỏ hàng từ localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(`cart-${userId}`);
    const parsedState = serializedState ? JSON.parse(serializedState) : [];
    return Array.isArray(parsedState) ? parsedState : [];
  } catch (e) {
    console.error('Could not load state from localStorage', e);
    return [];
  }
};

const initialState = {
  userId,
  items: loadFromLocalStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      saveToLocalStorage(state);
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      saveToLocalStorage(state);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }

      saveToLocalStorage(state);
    },

    clearCart: (state) => {
      state.items = [];
      saveToLocalStorage(state);
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
