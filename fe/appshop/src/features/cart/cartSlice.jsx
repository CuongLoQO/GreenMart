
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
    const serializedState = JSON.stringify(state.items); // Lưu chỉ mảng items
    localStorage.setItem(`cart-${userId}`, serializedState); // Lưu giỏ hàng với khóa cart-{userId}
  } catch (e) {
    console.error('Could not save state to localStorage', e);
  }
};

// Hàm tải giỏ hàng từ localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(`cart-${userId}`);
    return serializedState ? JSON.parse(serializedState) : []; // Trả về mảng rỗng nếu không có giỏ hàng
  } catch (e) {
    console.error('Could not load state from localStorage', e);
    return []; // Trả về mảng rỗng nếu có lỗi
  }
};

const initialState = {
  userId, // Lấy UUID từ localStorage
  items: loadFromLocalStorage(), // Mảng chứa các sản phẩm trong giỏ hàng, tải từ localStorage
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Thêm sản phẩm vào giỏ hàng
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Nếu sản phẩm đã tồn tại, tăng số lượng
        existingItem.quantity += 1;
      } else {
        // Nếu sản phẩm chưa tồn tại, thêm mới với số lượng mặc định là 1
        state.items.push({ ...newItem, quantity: 1 });
      }

      saveToLocalStorage(state); // Lưu lại giỏ hàng vào localStorage
    },

    // Xóa sản phẩm khỏi giỏ hàng
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);

      saveToLocalStorage(state); // Lưu lại giỏ hàng vào localStorage
    },

    // Cập nhật số lượng sản phẩm
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }

      saveToLocalStorage(state); // Lưu lại giỏ hàng vào localStorage
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
