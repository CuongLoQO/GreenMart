import { v4 as uuidv4 } from 'uuid';

// Hàm lấy hoặc tạo userId
export const getOrCreateUserId = () => {
  let userId = localStorage.getItem('userId');
  if (!userId) {
    userId = uuidv4();
    localStorage.setItem('userId', userId);
  }
  return userId;
};
