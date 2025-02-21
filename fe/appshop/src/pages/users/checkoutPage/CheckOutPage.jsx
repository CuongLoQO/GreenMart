// import { formatter } from "utils/formatter";
// import BreadCrum from "../theme/breadCrum/BreadCrum";
// import "./checkoutpage.scss"
// const CheckOutPage = () => {
//   return (
//     <>
//       <BreadCrum name="Thanh toán" />
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
//             <div className="checkout_input">
//               <label>
//                 Họ và tên: <span className="required">*</span>
//                 <input type="text" placeholder="Nhập họ và tên" />
//               </label>
//             </div>
//             <div className="checkout_input">
//               <label>
//                 Địa chỉ: <span className="required">*</span>
//                 <input type="text" placeholder="Nhập địa chỉ" />
//               </label>
//             </div>
//             <div className="checkout_input_group">
//               <div className="checkout_input">
//                 <label>
//                   Số điện thoại: <span className="required">*</span>
//                   <input type="text" placeholder="Số điện thoại" />
//                 </label>
//               </div>
//               <div className="checkout_input">
//                 <label>
//                   Email: <span className="required">*</span>
//                   <input type="email" placeholder="Nhập địa chỉ Email" />
//                 </label>
//               </div>
//             </div>
//             <div className="checkout_input">
//               <label>
//                 Ghi chú: <span className="required">*</span>
//                 <textarea rows={20} placeholder="Thêm ghi chú"></textarea>
//               </label>
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
//             <div className="checkout_oder">
//               <h3>Đơn hàng</h3>
//               <ul>
//                 <li>
//                   <span>Thị bò mỹ</span>
//                   <b>{formatter(200000)}</b>
//                 </li>
//                 <li>
//                   <span>Cá hồi</span>
//                   <b>{formatter(200000)}</b>
//                 </li>
//                 <li>
//                   <span>Dâu tây</span>
//                   <b>{formatter(200000)}</b>
//                 </li>
//                 <li>
//                   <span>Cam</span>
//                   <b>{formatter(200000)}</b>
//                 </li>
//                 <li>
//                   <h4>Mã giảm giá</h4>
//                   <b>Voucher1992</b>
//                 </li>
//                 <li className="checkout_oder-rate">
//                   <h3>Tổng thanh toán</h3>
//                   <b>{formatter(745000)}</b>
//                 </li>
//               </ul>
//               <button type="submit" className="btn-submit">Đặt hàng</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default CheckOutPage;
import { useState } from "react";
import { useSelector } from "react-redux";
import { formatter } from "utils/formatter";
import BreadCrum from "../theme/breadCrum/BreadCrum";
import "./checkoutpage.scss";

const CheckOutPage = () => {
  const cartItems = useSelector((state) => state.cart.items); // 🔥 Lấy dữ liệu giỏ hàng từ Redux

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    note: "",
  });

  // Tính tổng tiền
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Xử lý thay đổi input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Xử lý submit đơn hàng
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.address || !formData.phone || !formData.email) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    // 🚀 Xử lý đặt hàng tại đây (có thể gửi API)
    console.log("Đặt hàng thành công:", { ...formData, cartItems, totalPrice });
    alert("Đặt hàng thành công!");
  };

  return (
    <>
      <BreadCrum name="Thanh toán" />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            {/* Form Thông Tin Người Mua */}
            <div className="col-lg-6 col-md-12">
              <div className="checkout_input">
                <label>
                  Họ và tên: <span className="required">*</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nhập họ và tên"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="checkout_input">
                <label>
                  Địa chỉ: <span className="required">*</span>
                  <input
                    type="text"
                    name="address"
                    placeholder="Nhập địa chỉ"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="checkout_input_group">
                <div className="checkout_input">
                  <label>
                    Số điện thoại: <span className="required">*</span>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Số điện thoại"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>

                <div className="checkout_input">
                  <label>
                    Email: <span className="required">*</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Nhập địa chỉ Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
              </div>

              <div className="checkout_input">
                <label>
                  Ghi chú:
                  <textarea
                    name="note"
                    rows={4}
                    placeholder="Thêm ghi chú"
                    value={formData.note}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            </div>

            {/* Thông Tin Đơn Hàng */}
            <div className="col-lg-6 col-md-12">
              <div className="checkout_oder">
                <h3>Đơn hàng</h3>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      <span>{item.name} x {item.quantity}</span>
                      <b>{formatter(item.price * item.quantity)}</b>
                    </li>
                  ))}
                  <li className="checkout_oder-rate">
                    <h3>Tổng thanh toán</h3>
                    <b>{formatter(totalPrice)}</b>
                  </li>
                </ul>
                <button type="submit" className="btn-submit">
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckOutPage;
