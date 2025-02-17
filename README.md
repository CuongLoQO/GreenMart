# GreenMart

GreenMart là một nền tảng thương mại điện tử thân thiện với môi trường, cung cấp các sản phẩm xanh và hữu cơ. Website được phát triển nhằm kết nối người tiêu dùng với các nhà cung cấp sản phẩm bền vững, giúp xây dựng một lối sống lành mạnh và bảo vệ môi trường.

## 🚀 Tính năng chính
- **Tìm kiếm & Lọc sản phẩm**: Dễ dàng tìm kiếm các sản phẩm xanh theo danh mục, thương hiệu, giá cả.
- **Giỏ hàng & Thanh toán**: Thêm sản phẩm vào giỏ hàng và thanh toán nhanh chóng, hỗ trợ nhiều phương thức thanh toán.
- **Hệ thống đăng nhập & quản lý tài khoản**: Đăng ký, đăng nhập, cập nhật thông tin cá nhân.
- **Quản lý đơn hàng**: Theo dõi đơn hàng, cập nhật trạng thái vận chuyển.
- **Đánh giá & bình luận**: Người dùng có thể đánh giá sản phẩm và để lại nhận xét.
- **Quản trị viên**: Quản lý sản phẩm, đơn hàng, người dùng.

## 🛠 Công nghệ sử dụng
- **Frontend**: React.js (Vite)
- **Backend**: Node.js (Express) & Next.js (cho hệ thống đăng nhập)
- **Cơ sở dữ liệu**: MySQL (chạy trên XAMPP)
- **Quản lý trạng thái**: Redux (nếu có)
- **Triển khai**: Docker, Vercel, hoặc một nền tảng hosting khác (tuỳ chọn)

## 📌 Cách cài đặt & chạy dự án
1. **Clone repository**
   ```bash
   git clone https://github.com/your-username/greenmart.git
   cd greenmart
   ```
2. **Cài đặt dependencies**
   - **Frontend**
     ```bash
     cd frontend
     npm install
     npm run dev
     ```
   - **Backend**
     ```bash
     cd backend
     npm install
     npm start
     ```
3. **Cấu hình môi trường**
   - Tạo file `.env` ở backend với các thông tin như database, JWT secret...
4. **Truy cập**
   - Frontend chạy tại `http://localhost:5173`
   - Backend chạy tại `http://localhost:3000`


