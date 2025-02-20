import { v4 as uuidv4 } from 'uuid';

// Hàm lấy hoặc tạo userId
export const getOrCreateUserId = () => {
  let userId = localStorage.getItem('userId');
  if (!userId) {
    userId = uuidv4(); // Tạo UUID mới
    localStorage.setItem('userId', userId); // Lưu vào localStorage
  }
  return userId;
};
